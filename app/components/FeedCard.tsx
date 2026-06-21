import { useState } from "react";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

export interface FeedPost {
  id: string;
  author: string;
  authorInitials: string;
  authorColor: string;
  timestamp: string;
  content: string;
  imageUrl?: string;
  category: string;
  categoryVariant: "primary" | "secondary" | "accent";
  likes: number;
  comments: number;
  shares: number;
  cardTint?: string; // subtle background tint
}

interface FeedCardProps {
  post: FeedPost;
}

const CATEGORY_STYLES: Record<string, string> = {
  primary:   "bg-primary/10 text-primary",
  secondary: "bg-secondary/10 text-secondary",
  accent:    "bg-accent/10 text-accent",
};

export function FeedCard({ post }: FeedCardProps) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLiked((v) => !v);
    setLikeCount((c) => liked ? c - 1 : c + 1);
  };

  return (
    <article
      className="group rounded-2xl border border-border bg-card shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md overflow-hidden"
      style={post.cardTint ? { backgroundColor: post.cardTint } : undefined}
    >
      {/* Card header */}
      <div className="flex items-start gap-3 p-4 pb-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white text-sm font-bold"
          style={{ backgroundColor: post.authorColor }}
        >
          {post.authorInitials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm text-foreground truncate" style={{ fontFamily: "var(--heading-font)" }}>
              {post.author}
            </span>
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${CATEGORY_STYLES[post.categoryVariant]}`}
            >
              {post.category}
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground">{post.timestamp}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-3">
        <p className="text-sm text-foreground leading-relaxed">{post.content}</p>
      </div>

      {/* Optional image placeholder */}
      {post.imageUrl !== undefined && (
        <div
          className="mx-4 mb-3 rounded-xl overflow-hidden"
          style={{ minHeight: 120, background: "var(--muted)" }}
        >
          {post.imageUrl ? (
            <img
              src={post.imageUrl}
              alt="Post media"
              className="w-full object-cover"
              style={{ maxHeight: 240 }}
            />
          ) : (
            <div
              className="flex items-center justify-center text-muted-foreground text-xs"
              style={{ height: 120 }}
            >
              Image
            </div>
          )}
        </div>
      )}

      {/* Engagement bar */}
      <div className="flex items-center justify-between border-t border-border px-4 py-2.5">
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium transition-colors ${
            liked
              ? "text-primary bg-primary/10"
              : "text-muted-foreground hover:bg-muted hover:text-primary"
          }`}
          aria-label="Like"
        >
          <Heart className={`h-4 w-4 ${liked ? "fill-primary" : ""}`} />
          {likeCount > 0 && <span>{likeCount}</span>}
        </button>

        <button
          className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
          aria-label="Comment"
        >
          <MessageCircle className="h-4 w-4" />
          {post.comments > 0 && <span>{post.comments}</span>}
        </button>

        <button
          className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-secondary"
          aria-label="Share"
        >
          <Share2 className="h-4 w-4" />
          {post.shares > 0 && <span>{post.shares}</span>}
        </button>

        <button
          onClick={() => setBookmarked((v) => !v)}
          className={`flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium transition-colors ${
            bookmarked
              ? "text-secondary bg-secondary/10"
              : "text-muted-foreground hover:bg-muted hover:text-secondary"
          }`}
          aria-label="Bookmark"
        >
          <Bookmark className={`h-4 w-4 ${bookmarked ? "fill-secondary" : ""}`} />
        </button>
      </div>
    </article>
  );
}
