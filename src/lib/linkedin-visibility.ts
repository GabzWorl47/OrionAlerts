import { promises as fs } from "fs";
import path from "path";
import type { LinkedInPost } from "@/lib/linkedin";

export type LinkedInVisibilityStore = {
  /** When a post ID has no explicit setting, use this default */
  defaultVisible: boolean;
  /** Explicit show/hide by LinkedIn post ID */
  visibility: Record<string, boolean>;
  /** Latest known posts (snapshot from last admin refresh) */
  posts: LinkedInPost[];
  updatedAt: string | null;
};

const STORE_PATH = path.join(process.cwd(), "data", "linkedin-visibility.json");

const emptyStore = (): LinkedInVisibilityStore => ({
  defaultVisible: false,
  visibility: {},
  posts: [],
  updatedAt: null,
});

async function ensureStoreFile() {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  try {
    await fs.access(STORE_PATH);
  } catch {
    await fs.writeFile(STORE_PATH, JSON.stringify(emptyStore(), null, 2), "utf8");
  }
}

export async function readVisibilityStore(): Promise<LinkedInVisibilityStore> {
  await ensureStoreFile();
  try {
    const raw = await fs.readFile(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw) as Partial<LinkedInVisibilityStore>;
    return {
      defaultVisible: Boolean(parsed.defaultVisible),
      visibility: parsed.visibility && typeof parsed.visibility === "object" ? parsed.visibility : {},
      posts: Array.isArray(parsed.posts) ? parsed.posts : [],
      updatedAt: parsed.updatedAt ?? null,
    };
  } catch {
    return emptyStore();
  }
}

async function writeVisibilityStore(store: LinkedInVisibilityStore) {
  await ensureStoreFile();
  const next: LinkedInVisibilityStore = {
    ...store,
    updatedAt: new Date().toISOString(),
  };
  await fs.writeFile(STORE_PATH, JSON.stringify(next, null, 2), "utf8");
  return next;
}

export function isPostVisible(
  postId: string,
  store: Pick<LinkedInVisibilityStore, "defaultVisible" | "visibility">,
) {
  if (Object.prototype.hasOwnProperty.call(store.visibility, postId)) {
    return Boolean(store.visibility[postId]);
  }
  return store.defaultVisible;
}

export async function mergeFetchedPosts(posts: LinkedInPost[]) {
  const store = await readVisibilityStore();
  const byId = new Map(store.posts.map((post) => [post.id, post]));
  for (const post of posts) {
    byId.set(post.id, post);
  }
  // Keep freshest fetched order first, then any older snapshots not in this batch
  const merged = [
    ...posts,
    ...store.posts.filter((post) => !posts.some((item) => item.id === post.id)),
  ];
  return writeVisibilityStore({
    ...store,
    posts: merged,
  });
}

export async function setPostVisibility(postId: string, visible: boolean) {
  const store = await readVisibilityStore();
  return writeVisibilityStore({
    ...store,
    visibility: {
      ...store.visibility,
      [postId]: visible,
    },
  });
}

export async function setManyPostVisibility(updates: Record<string, boolean>) {
  const store = await readVisibilityStore();
  return writeVisibilityStore({
    ...store,
    visibility: {
      ...store.visibility,
      ...updates,
    },
  });
}

export async function setDefaultVisibility(defaultVisible: boolean) {
  const store = await readVisibilityStore();
  return writeVisibilityStore({
    ...store,
    defaultVisible,
  });
}

export async function getVisiblePosts(posts: LinkedInPost[]) {
  const store = await readVisibilityStore();
  return posts.filter((post) => isPostVisible(post.id, store));
}

export async function getPostsWithVisibility() {
  const store = await readVisibilityStore();
  return {
    defaultVisible: store.defaultVisible,
    updatedAt: store.updatedAt,
    posts: store.posts.map((post) => ({
      ...post,
      visible: isPostVisible(post.id, store),
    })),
    visibleCount: store.posts.filter((post) => isPostVisible(post.id, store)).length,
  };
}
