"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  CircleAlert,
  LoaderCircle,
  LogOut,
  RefreshCw,
  Shield,
} from "lucide-react";
import type { LinkedInPost } from "@/lib/linkedin";

type LinkedInStatus = {
  configured: boolean;
  hasAccessToken: boolean;
  hasOrganizationId: boolean;
  organizationId: string | null;
  apiVersion: string;
  pageUrl: string;
  cache: {
    ageSeconds: number;
    postCount: number;
    error: string | null;
  } | null;
};

type AdminPost = LinkedInPost & { visible: boolean };

type PanelData = {
  status: LinkedInStatus;
  posts: AdminPost[];
  defaultVisible: boolean;
  visibleCount: number;
  updatedAt?: string | null;
  error?: string | null;
};

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
  const [data, setData] = useState<PanelData | null>(null);
  const [loading, setLoading] = useState(initiallyAuthenticated);
  const [refreshing, setRefreshing] = useState(false);
  const [actionMessage, setActionMessage] = useState<string | null>(null);

  const loadStatus = useCallback(async () => {
    setLoading(true);
    setActionMessage(null);
    try {
      const response = await fetch("/api/admin/linkedin");
      if (response.status === 401) {
        setAuthenticated(false);
        setData(null);
        return;
      }
      const json = (await response.json()) as PanelData & { error?: string };
      setData({
        status: json.status,
        posts: json.posts || [],
        defaultVisible: Boolean(json.defaultVisible),
        visibleCount: json.visibleCount ?? 0,
        updatedAt: json.updatedAt,
        error: json.error,
      });
    } catch {
      setActionMessage("Could not load admin status.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authenticated) void loadStatus();
  }, [authenticated, loadStatus]);

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
      setLoginError("Login failed. Try again.");
    } finally {
      setLoggingIn(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    setAuthenticated(false);
    setData(null);
  }

  async function handleRefresh() {
    setRefreshing(true);
    setActionMessage(null);
    try {
      const response = await fetch("/api/admin/linkedin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "refresh" }),
      });
      const json = (await response.json()) as PanelData & { error?: string | null };
      if (!response.ok) {
        setActionMessage(json.error || "Refresh failed.");
        return;
      }
      setData({
        status: json.status,
        posts: json.posts || [],
        defaultVisible: Boolean(json.defaultVisible),
        visibleCount: json.visibleCount ?? 0,
        updatedAt: json.updatedAt,
        error: json.error,
      });
      setActionMessage(
        json.status.configured
          ? `Fetched ${json.posts?.length ?? 0} post(s). ${json.visibleCount ?? 0} visible on site.`
          : "LinkedIn credentials are not configured yet. You can still manage visibility after posts are fetched.",
      );
    } catch {
      setActionMessage("Refresh failed.");
    } finally {
      setRefreshing(false);
    }
  }

  async function handleToggle(postId: string, visible: boolean) {
    setActionMessage(null);
    // Optimistic UI
    setData((current) => {
      if (!current) return current;
      const posts = current.posts.map((post) =>
        post.id === postId ? { ...post, visible } : post,
      );
      return {
        ...current,
        posts,
        visibleCount: posts.filter((post) => post.visible).length,
      };
    });

    try {
      const response = await fetch("/api/admin/linkedin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "set-visibility", postId, visible }),
      });
      const json = (await response.json()) as PanelData & { error?: string };
      if (!response.ok) {
        setActionMessage(json.error || "Could not update visibility.");
        await loadStatus();
        return;
      }
      setData({
        status: json.status,
        posts: json.posts || [],
        defaultVisible: Boolean(json.defaultVisible),
        visibleCount: json.visibleCount ?? 0,
        updatedAt: json.updatedAt,
        error: json.error,
      });
    } catch {
      setActionMessage("Could not update visibility.");
      await loadStatus();
    }
  }

  async function handleBulk(visible: boolean) {
    if (!data?.posts.length) return;
    const updates = Object.fromEntries(data.posts.map((post) => [post.id, visible]));
    setRefreshing(true);
    setActionMessage(null);
    try {
      const response = await fetch("/api/admin/linkedin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "set-many-visibility", updates }),
      });
      const json = (await response.json()) as PanelData & { error?: string };
      if (!response.ok) {
        setActionMessage(json.error || "Bulk update failed.");
        return;
      }
      setData({
        status: json.status,
        posts: json.posts || [],
        defaultVisible: Boolean(json.defaultVisible),
        visibleCount: json.visibleCount ?? 0,
        updatedAt: json.updatedAt,
        error: json.error,
      });
      setActionMessage(visible ? "All listed posts are now visible." : "All listed posts are now hidden.");
    } catch {
      setActionMessage("Bulk update failed.");
    } finally {
      setRefreshing(false);
    }
  }

  if (!authConfigured) {
    return (
      <div className="mx-auto max-w-xl rounded-[22px] border border-line bg-white p-8">
        <p className="eyebrow">Admin</p>
        <h1 className="display mt-3 text-3xl normal-case text-steel-gradient">
          Password not set
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-strong">
          Add <code className="rounded bg-surface-2 px-1.5 py-0.5 text-text">ADMIN_PASSWORD</code>{" "}
          to your <code className="rounded bg-surface-2 px-1.5 py-0.5 text-text">.env.local</code>{" "}
          file, then restart the dev server.
        </p>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="mx-auto max-w-md rounded-[22px] border border-line bg-white p-8 shadow-[0_24px_50px_-32px_rgba(15,61,120,0.35)]">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-surface-2 text-blue">
          <Shield size={20} />
        </div>
        <h1 className="display mt-4 text-3xl normal-case text-steel-gradient">Admin login</h1>
        <p className="mt-2 text-sm text-muted">
          Manage LinkedIn sync for the blogs page.
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
              className="w-full rounded-[12px] border border-line bg-bg px-3.5 py-2.5 text-sm outline-none focus:border-blue/40 focus:ring-2 focus:ring-blue/10"
              autoComplete="current-password"
              required
            />
          </label>
          {loginError ? <p className="text-sm text-alert">{loginError}</p> : null}
          <button
            type="submit"
            disabled={loggingIn}
            className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-[#0f172a] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue disabled:opacity-60"
          >
            {loggingIn ? <LoaderCircle size={16} className="animate-spin" /> : null}
            Enter admin
          </button>
        </form>
      </div>
    );
  }

  const status = data?.status;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="eyebrow">Admin</p>
          <h1 className="display mt-2 text-[clamp(1.8rem,3.5vw,2.6rem)] normal-case text-steel-gradient">
            LinkedIn content
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-strong">
            Fetch LinkedIn posts, then choose which ones appear on the public blogs page.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-1.5 rounded-[10px] border border-line bg-white px-3.5 py-2 text-sm font-semibold text-muted-strong transition hover:border-blue/30 hover:text-blue"
          >
            View blogs
            <ArrowUpRight size={14} />
          </Link>
          <button
            type="button"
            onClick={() => void handleLogout()}
            className="inline-flex items-center gap-1.5 rounded-[10px] border border-line bg-white px-3.5 py-2 text-sm font-semibold text-muted-strong transition hover:border-alert/30 hover:text-alert"
          >
            <LogOut size={14} />
            Log out
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatusCard
          label="Admin access"
          ok
          detail="Signed in"
        />
        <StatusCard
          label="Access token"
          ok={Boolean(status?.hasAccessToken)}
          detail={status?.hasAccessToken ? "Present in env" : "Missing LINKEDIN_ACCESS_TOKEN"}
        />
        <StatusCard
          label="Organization ID"
          ok={Boolean(status?.hasOrganizationId)}
          detail={
            status?.hasOrganizationId
              ? `Configured (${status.organizationId})`
              : "Missing LINKEDIN_ORGANIZATION_ID"
          }
        />
      </div>

      <div className="rounded-[22px] border border-line bg-white p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-xl normal-case text-text">Sync controls</h2>
            <p className="mt-1 text-sm text-muted">
              API version {status?.apiVersion || "—"} ·{" "}
              {status?.configured ? "Ready to fetch" : "Waiting for LinkedIn env vars"}
            </p>
          </div>
          <button
            type="button"
            onClick={() => void handleRefresh()}
            disabled={refreshing || loading}
            className="inline-flex items-center gap-2 rounded-[10px] bg-blue px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1f74e0] disabled:opacity-60"
          >
            {refreshing ? (
              <LoaderCircle size={16} className="animate-spin" />
            ) : (
              <RefreshCw size={16} />
            )}
            Refresh from LinkedIn
          </button>
        </div>

        {actionMessage ? (
          <p className="mt-4 rounded-[12px] bg-surface px-3 py-2 text-sm text-muted-strong">
            {actionMessage}
          </p>
        ) : null}
        {data?.error ? (
          <p className="mt-4 rounded-[12px] border border-alert/20 bg-alert/5 px-3 py-2 text-sm text-alert">
            {data.error}
          </p>
        ) : null}

        <div className="mt-5 grid gap-3 text-sm text-muted-strong sm:grid-cols-2">
          <p>
            <span className="font-semibold text-text">Page URL: </span>
            {status?.pageUrl ? (
              <a
                href={status.pageUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue hover:underline"
              >
                {status.pageUrl}
              </a>
            ) : (
              "—"
            )}
          </p>
          <p>
            <span className="font-semibold text-text">Cache: </span>
            {status?.cache
              ? `${status.cache.postCount} posts · ${status.cache.ageSeconds}s ago`
              : "Empty"}
          </p>
        </div>
      </div>

      <div className="rounded-[22px] border border-line bg-white p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-xl normal-case text-text">Post visibility</h2>
            <p className="mt-1 text-sm text-muted">
              Toggle which posts show in “From LinkedIn” on `/blogs`. New posts stay hidden until
              you enable them.
            </p>
            <p className="mt-2 text-sm font-medium text-text">
              {data?.visibleCount ?? 0} visible
              {data?.posts?.length ? ` · ${data.posts.length} total` : ""}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => void handleBulk(true)}
              disabled={!data?.posts?.length || refreshing}
              className="rounded-[10px] border border-line px-3 py-2 text-sm font-semibold text-muted-strong transition hover:border-blue/30 hover:text-blue disabled:opacity-50"
            >
              Show all
            </button>
            <button
              type="button"
              onClick={() => void handleBulk(false)}
              disabled={!data?.posts?.length || refreshing}
              className="rounded-[10px] border border-line px-3 py-2 text-sm font-semibold text-muted-strong transition hover:border-alert/30 hover:text-alert disabled:opacity-50"
            >
              Hide all
            </button>
          </div>
        </div>

        {loading ? (
          <p className="mt-6 text-sm text-muted">Loading…</p>
        ) : data?.posts?.length ? (
          <div className="mt-5 space-y-3">
            {data.posts.map((post) => (
              <div
                key={post.id}
                className={`flex flex-col gap-3 rounded-[16px] border px-4 py-3 sm:flex-row sm:items-center sm:justify-between ${
                  post.visible
                    ? "border-blue/25 bg-blue/[0.03]"
                    : "border-line bg-surface"
                }`}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-caption">
                      {post.dateLabel}
                    </p>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                        post.visible
                          ? "bg-blue/10 text-blue"
                          : "bg-white text-muted"
                      }`}
                    >
                      {post.visible ? "Visible" : "Hidden"}
                    </span>
                  </div>
                  <p className="mt-1.5 font-display text-[15px] font-semibold normal-case text-text">
                    {post.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-strong line-clamp-2">{post.excerpt}</p>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-blue hover:underline"
                  >
                    Open on LinkedIn
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                <label className="inline-flex shrink-0 cursor-pointer items-center gap-2 rounded-[10px] border border-line bg-white px-3 py-2 text-sm font-semibold text-text">
                  <input
                    type="checkbox"
                    checked={post.visible}
                    onChange={(e) => void handleToggle(post.id, e.target.checked)}
                    className="h-4 w-4 accent-[var(--blue)]"
                  />
                  Show on website
                </label>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-[16px] border border-dashed border-line bg-surface px-4 py-8 text-center">
            <p className="text-sm font-medium text-text">No posts fetched yet</p>
            <p className="mx-auto mt-1 max-w-md text-sm text-muted">
              Add LinkedIn credentials in `.env.local`, then click “Refresh from LinkedIn”.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function StatusCard({
  label,
  ok,
  detail,
}: {
  label: string;
  ok: boolean;
  detail: string;
}) {
  return (
    <div className="rounded-[18px] border border-line bg-white p-4">
      <div className="flex items-center gap-2">
        {ok ? (
          <CheckCircle2 size={16} className="text-blue" />
        ) : (
          <CircleAlert size={16} className="text-alert" />
        )}
        <p className="text-sm font-semibold text-text">{label}</p>
      </div>
      <p className="mt-2 text-sm text-muted-strong">{detail}</p>
    </div>
  );
}
