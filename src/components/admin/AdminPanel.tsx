"use client";

import {
  FormEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  Eye,
  EyeOff,
  LoaderCircle,
  LogOut,
  Pencil,
  Plus,
  Shield,
  Trash2,
  X,
} from "lucide-react";
import {
  blogCategoryOptions,
  serializeBlogBody,
  serializeTakeaways,
  slugifyTitle,
  type BlogCategory,
  type BlogPost,
} from "@/lib/blogs";

type Counts = {
  all: number;
  published: number;
  drafts: number;
};

type FormState = {
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  takeawaysText: string;
  body: string;
  published: boolean;
  slugTouched: boolean;
};

const emptyForm = (): FormState => ({
  title: "",
  slug: "",
  excerpt: "",
  category: "Operations",
  date: new Date().toISOString().slice(0, 10),
  author: "OrionAlerts Team",
  authorRole: "Editorial",
  image: "",
  takeawaysText: "",
  body: "",
  published: true,
  slugTouched: false,
});

function postToForm(post: BlogPost): FormState {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    category: post.category,
    date: post.date,
    author: post.author,
    authorRole: post.authorRole,
    image: post.image,
    takeawaysText: serializeTakeaways(post.takeaways),
    body: serializeBlogBody(post.sections),
    published: post.published,
    slugTouched: true,
  };
}

export function AdminPanel({
  authConfigured,
  initiallyAuthenticated,
}: {
  authConfigured: boolean;
  initiallyAuthenticated: boolean;
}) {
  const [authenticated, setAuthenticated] = useState(initiallyAuthenticated);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [counts, setCounts] = useState<Counts>({ all: 0, published: 0, drafts: 0 });
  const [loading, setLoading] = useState(initiallyAuthenticated);
  const [saving, setSaving] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);

  const loadPosts = useCallback(async () => {
    setLoading(true);
    setActionError(null);
    try {
      const response = await fetch("/api/admin/blogs");
      if (response.status === 401) {
        setAuthenticated(false);
        setPosts([]);
        return;
      }
      const json = (await response.json()) as {
        posts?: BlogPost[];
        counts?: Counts;
        error?: string;
      };
      if (!response.ok) {
        setActionError(json.error || "Could not load blogs.");
        return;
      }
      setPosts(json.posts || []);
      setCounts(json.counts || { all: 0, published: 0, drafts: 0 });
    } catch {
      setActionError("Could not load blogs.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authenticated) void loadPosts();
  }, [authenticated, loadPosts]);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    setLoggingIn(true);
    setLoginError(null);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const json = (await response.json()) as { error?: string };
      if (!response.ok) {
        setLoginError(json.error || "Login failed.");
        return;
      }
      setPassword("");
      setAuthenticated(true);
    } catch {
      setLoginError("Login failed.");
    } finally {
      setLoggingIn(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setPosts([]);
    setEditorOpen(false);
    setEditingSlug(null);
  }

  function openCreate() {
    setEditingSlug(null);
    setForm(emptyForm());
    setEditorOpen(true);
    setActionMessage(null);
    setActionError(null);
  }

  function openEdit(post: BlogPost) {
    setEditingSlug(post.slug);
    setForm(postToForm(post));
    setEditorOpen(true);
    setActionMessage(null);
    setActionError(null);
  }

  function closeEditor() {
    setEditorOpen(false);
    setEditingSlug(null);
    setForm(emptyForm());
  }

  function updateForm<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => {
      const next = { ...current, [key]: value };
      if (key === "title" && !current.slugTouched && !editingSlug) {
        next.slug = slugifyTitle(String(value));
      }
      if (key === "slug") {
        next.slugTouched = true;
      }
      return next;
    });
  }

  async function handleSave(event: FormEvent) {
    event.preventDefault();
    setSaving(true);
    setActionError(null);
    setActionMessage(null);

    const payload = {
      title: form.title,
      slug: form.slug,
      excerpt: form.excerpt,
      category: form.category,
      date: form.date,
      author: form.author,
      authorRole: form.authorRole,
      image: form.image,
      takeawaysText: form.takeawaysText,
      body: form.body,
      published: form.published,
    };

    try {
      const response = await fetch(
        editingSlug ? `/api/admin/blogs/${editingSlug}` : "/api/admin/blogs",
        {
          method: editingSlug ? "PUT" : "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        },
      );
      const json = (await response.json()) as { error?: string; post?: BlogPost };
      if (!response.ok) {
        setActionError(json.error || "Could not save blog post.");
        return;
      }
      setActionMessage(editingSlug ? "Blog post updated." : "Blog post created.");
      closeEditor();
      await loadPosts();
    } catch {
      setActionError("Could not save blog post.");
    } finally {
      setSaving(false);
    }
  }

  async function togglePublished(post: BlogPost) {
    setActionError(null);
    setActionMessage(null);
    try {
      const response = await fetch(`/api/admin/blogs/${post.slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !post.published, publishedOnly: true }),
      });
      const json = (await response.json()) as { error?: string };
      if (!response.ok) {
        setActionError(json.error || "Could not update publish state.");
        return;
      }
      setActionMessage(!post.published ? "Post published." : "Post moved to drafts.");
      await loadPosts();
    } catch {
      setActionError("Could not update publish state.");
    }
  }

  async function handleDelete(post: BlogPost) {
    const confirmed = window.confirm(`Delete “${post.title}”? This cannot be undone.`);
    if (!confirmed) return;

    setActionError(null);
    setActionMessage(null);
    try {
      const response = await fetch(`/api/admin/blogs/${post.slug}`, { method: "DELETE" });
      const json = (await response.json()) as { error?: string };
      if (!response.ok) {
        setActionError(json.error || "Could not delete blog post.");
        return;
      }
      if (editingSlug === post.slug) closeEditor();
      setActionMessage("Blog post deleted.");
      await loadPosts();
    } catch {
      setActionError("Could not delete blog post.");
    }
  }

  const sortedPosts = useMemo(
    () => [...posts].sort((a, b) => (a.date < b.date ? 1 : -1)),
    [posts],
  );

  if (!authConfigured) {
    return (
      <div className="rounded-[24px] border border-line bg-white p-8 shadow-[0_20px_50px_-36px_rgba(15,61,120,0.45)]">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-2 text-blue">
          <Shield size={20} />
        </div>
        <h1 className="display mt-4 text-3xl normal-case text-steel-gradient">
          Admin not configured
        </h1>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-strong">
          Add <code className="rounded bg-surface-2 px-1.5 py-0.5 text-text">ADMIN_PASSWORD</code>{" "}
          to your <code className="rounded bg-surface-2 px-1.5 py-0.5 text-text">.env.local</code>{" "}
          file, then restart the dev server.
        </p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="mx-auto max-w-md rounded-[24px] border border-line bg-white p-8 shadow-[0_20px_50px_-36px_rgba(15,61,120,0.45)]">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-2 text-blue">
          <Shield size={20} />
        </div>
        <h1 className="display mt-4 text-3xl normal-case text-steel-gradient">Admin login</h1>
        <p className="mt-2 text-sm text-muted-strong">
          Sign in to create, edit, and publish website blogs.
        </p>
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-caption">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-[12px] border border-line bg-white px-3.5 py-2.5 text-sm outline-none focus:border-blue/35 focus:ring-2 focus:ring-blue/10"
              autoComplete="current-password"
              required
            />
          </label>
          {loginError ? (
            <p className="inline-flex items-center gap-2 text-sm text-red-600">
              <CircleAlert size={15} />
              {loginError}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={loggingIn}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#0f172a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1e293b] disabled:opacity-60"
          >
            {loggingIn ? <LoaderCircle size={16} className="animate-spin" /> : null}
            Sign in
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[24px] border border-line bg-white p-6 shadow-[0_20px_50px_-36px_rgba(15,61,120,0.35)] md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-caption">
              OrionAlerts Admin
            </p>
            <h1 className="display mt-2 text-[clamp(1.8rem,3.5vw,2.6rem)] normal-case text-steel-gradient">
              Blog manager
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-muted-strong">
              Create and publish articles for the website blogs section. Drafts stay private until
              you publish them.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold text-muted-strong transition hover:border-blue/30 hover:text-blue"
            >
              View blogs
              <ArrowUpRight size={14} />
            </Link>
            <button
              type="button"
              onClick={() => void handleLogout()}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-semibold text-muted-strong transition hover:border-red-200 hover:text-red-600"
            >
              <LogOut size={14} />
              Log out
            </button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            { label: "Total posts", value: counts.all },
            { label: "Published", value: counts.published },
            { label: "Drafts", value: counts.drafts },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[16px] border border-line bg-surface px-4 py-3"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-caption">
                {item.label}
              </p>
              <p className="mt-1 font-display text-2xl font-semibold normal-case text-text">
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={openCreate}
            className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1e293b]"
          >
            <Plus size={16} />
            New blog post
          </button>
          {(actionMessage || actionError) && (
            <p
              className={`inline-flex items-center gap-2 text-sm ${
                actionError ? "text-red-600" : "text-emerald-700"
              }`}
            >
              {actionError ? <CircleAlert size={15} /> : <CheckCircle2 size={15} />}
              {actionError || actionMessage}
            </p>
          )}
        </div>
      </div>

      {editorOpen ? (
        <form
          onSubmit={handleSave}
          className="rounded-[24px] border border-line bg-white p-6 shadow-[0_20px_50px_-36px_rgba(15,61,120,0.35)] md:p-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-caption">
                {editingSlug ? "Edit post" : "New post"}
              </p>
              <h2 className="display mt-1 text-2xl normal-case text-text">
                {editingSlug ? "Update article" : "Write a new article"}
              </h2>
            </div>
            <button
              type="button"
              onClick={closeEditor}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition hover:text-text"
              aria-label="Close editor"
            >
              <X size={16} />
            </button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Field label="Title">
              <input
                required
                value={form.title}
                onChange={(e) => updateForm("title", e.target.value)}
                className={inputClass}
                placeholder="Alert Fatigue Is an Ops Problem"
              />
            </Field>
            <Field label="URL slug">
              <input
                required
                value={form.slug}
                onChange={(e) => updateForm("slug", slugifyTitle(e.target.value) || e.target.value)}
                className={inputClass}
                placeholder="alert-fatigue-is-an-ops-problem"
              />
            </Field>
            <Field label="Category">
              <select
                value={form.category}
                onChange={(e) => updateForm("category", e.target.value as BlogCategory)}
                className={inputClass}
              >
                {blogCategoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Publish date">
              <input
                type="date"
                required
                value={form.date}
                onChange={(e) => updateForm("date", e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Author">
              <input
                required
                value={form.author}
                onChange={(e) => updateForm("author", e.target.value)}
                className={inputClass}
              />
            </Field>
            <Field label="Author role">
              <input
                value={form.authorRole}
                onChange={(e) => updateForm("authorRole", e.target.value)}
                className={inputClass}
              />
            </Field>
          </div>

          <div className="mt-4 space-y-4">
            <Field label="Cover image URL">
              <input
                required
                value={form.image}
                onChange={(e) => updateForm("image", e.target.value)}
                className={inputClass}
                placeholder="https://..."
              />
            </Field>
            <Field label="Excerpt">
              <textarea
                required
                value={form.excerpt}
                onChange={(e) => updateForm("excerpt", e.target.value)}
                className={`${inputClass} min-h-[90px] resize-y`}
                placeholder="One or two sentences shown on the blogs listing."
              />
            </Field>
            <Field label="Key takeaways (one per line)">
              <textarea
                value={form.takeawaysText}
                onChange={(e) => updateForm("takeawaysText", e.target.value)}
                className={`${inputClass} min-h-[100px] resize-y`}
                placeholder={"First takeaway\nSecond takeaway"}
              />
            </Field>
            <Field
              label="Article body"
              hint="Use blank lines between blocks. Start a line with ## for a heading, > for a quote, or - for list items."
            >
              <textarea
                required
                value={form.body}
                onChange={(e) => updateForm("body", e.target.value)}
                className={`${inputClass} min-h-[280px] resize-y font-mono text-[13px] leading-relaxed`}
                placeholder={
                  "Opening paragraph...\n\n## Section heading\n\nMore detail here.\n\n> A short quote\n\n- Bullet one\n- Bullet two"
                }
              />
            </Field>
            <label className="inline-flex items-center gap-2 text-sm font-medium text-text">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => updateForm("published", e.target.checked)}
                className="h-4 w-4 rounded border-line text-blue"
              />
              Publish immediately on the website
            </label>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-full bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1e293b] disabled:opacity-60"
            >
              {saving ? <LoaderCircle size={16} className="animate-spin" /> : null}
              {editingSlug ? "Save changes" : "Create post"}
            </button>
            <button
              type="button"
              onClick={closeEditor}
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-semibold text-muted-strong"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : null}

      <div className="rounded-[24px] border border-line bg-white p-6 shadow-[0_20px_50px_-36px_rgba(15,61,120,0.35)] md:p-8">
        <div className="flex items-center justify-between gap-3">
          <h2 className="display text-2xl normal-case text-text">All posts</h2>
          {loading ? (
            <LoaderCircle size={18} className="animate-spin text-muted" />
          ) : null}
        </div>

        {sortedPosts.length === 0 && !loading ? (
          <div className="mt-6 rounded-[16px] border border-dashed border-line bg-surface px-4 py-10 text-center">
            <p className="font-display text-xl normal-case text-text">No blog posts yet</p>
            <p className="mt-1 text-sm text-muted">Create your first article to show it on /blogs.</p>
            <button
              type="button"
              onClick={openCreate}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue"
            >
              <Plus size={15} />
              New blog post
            </button>
          </div>
        ) : (
          <div className="mt-5 divide-y divide-line border-y border-line">
            {sortedPosts.map((post) => (
              <div
                key={post.slug}
                className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-lg font-semibold normal-case text-text">
                      {post.title}
                    </h3>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.1em] ${
                        post.published
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {post.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {post.category} · {post.dateLabel} · {post.readTime}
                  </p>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-strong">{post.excerpt}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:shrink-0">
                  {post.published ? (
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-muted-strong transition hover:text-blue"
                    >
                      Open
                      <ArrowUpRight size={13} />
                    </Link>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => void togglePublished(post)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-muted-strong transition hover:text-blue"
                  >
                    {post.published ? <EyeOff size={13} /> : <Eye size={13} />}
                    {post.published ? "Unpublish" : "Publish"}
                  </button>
                  <button
                    type="button"
                    onClick={() => openEdit(post)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-muted-strong transition hover:text-blue"
                  >
                    <Pencil size={13} />
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => void handleDelete(post)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs font-semibold text-muted-strong transition hover:border-red-200 hover:text-red-600"
                  >
                    <Trash2 size={13} />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-[12px] border border-line bg-white px-3.5 py-2.5 text-sm text-text outline-none transition placeholder:text-caption focus:border-blue/35 focus:ring-2 focus:ring-blue/10";

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-caption">
        {label}
      </span>
      {children}
      {hint ? <span className="mt-1.5 block text-xs leading-relaxed text-muted">{hint}</span> : null}
    </label>
  );
}
