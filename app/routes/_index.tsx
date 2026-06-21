import { useState } from "react";
import { SpinCityNavbar } from "~/components/SpinCityNavbar";
import { ProfileStrip } from "~/components/ProfileStrip";
import { PostComposer } from "~/components/PostComposer";
import { FeedCard } from "~/components/FeedCard";
import { PLACEHOLDER_POSTS } from "~/lib/placeholder-feed";
import { useConfigurables } from "~/modules/configurables";
import type { FeedPost } from "~/components/FeedCard";

export default function IndexPage() {
  const { config, loading } = useConfigurables();

  const showStrip =
    loading ? true : (config?.showProfileStrip ?? true);

  const maxCards =
    loading ? 8 : (config?.feedMaxPlaceholderCards ?? 8);

  const welcomeMessage =
    loading ? "Welcome to SpinCity" : (config?.feedWelcomeMessage ?? "Welcome to SpinCity");

  const [userPosts, setUserPosts] = useState<FeedPost[]>([]);

  const handlePost = (text: string) => {
    const newPost: FeedPost = {
      id: `user-${Date.now()}`,
      author: "You",
      authorInitials: "Y",
      authorColor: "var(--primary)",
      timestamp: "Just now",
      content: text,
      category: "New Post",
      categoryVariant: "primary",
      likes: 0,
      comments: 0,
      shares: 0,
    };
    setUserPosts((prev) => [newPost, ...prev]);
  };

  const displayedPlaceholders = PLACEHOLDER_POSTS.slice(0, maxCards);
  const allPosts: FeedPost[] = [...userPosts, ...displayedPlaceholders];

  return (
    <div className="min-h-screen bg-background">
      <SpinCityNavbar />

      <main className="mx-auto max-w-2xl px-4 py-4 pb-16">
        {/* Welcome banner (shown while loading or as intro) */}
        {!loading && (
          <div className="mb-4 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-border px-5 py-3.5">
            <p
              className="text-base font-semibold text-foreground"
              style={{ fontFamily: "var(--heading-font)" }}
            >
              {welcomeMessage}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {config?.tagline ?? "Find your home. Build your hustle."}
            </p>
          </div>
        )}

        {/* Profile strip */}
        {showStrip && (
          <section aria-label="People to follow" className="mb-4">
            <ProfileStrip />
          </section>
        )}

        {/* Post composer */}
        <section aria-label="Create a post" className="mb-5">
          <PostComposer onPost={handlePost} />
        </section>

        {/* Feed */}
        <section aria-label="Social feed" className="space-y-4">
          {allPosts.map((post) => (
            <FeedCard key={post.id} post={post} />
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-xs text-muted-foreground">
          {config?.footerText ?? "SpinCity — Find your home. Build your hustle."}
        </footer>
      </main>
    </div>
  );
}
