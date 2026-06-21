import { useState } from "react";
import { Link } from "react-router";
import { Image, Smile, Send } from "lucide-react";
import { useAuth } from "~/modules/authentication/use-authentication";
import { useConfigurables } from "~/modules/configurables";

interface PostComposerProps {
  onPost?: (text: string) => void;
}

export function PostComposer({ onPost }: PostComposerProps) {
  const [text, setText] = useState("");
  const { user, isAuthenticated } = useAuth();
  const { config, loading } = useConfigurables();

  const placeholder = loading
    ? "What's happening in your city?"
    : (config?.feedComposerPlaceholder ?? "What's happening in your city?");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onPost?.(text.trim());
    setText("");
  };

  if (!isAuthenticated) {
    return (
      <div className="rounded-2xl border border-border bg-card p-4 shadow-sm">
        <p className="text-center text-sm text-muted-foreground">
          <Link to="/auth/login" className="font-semibold text-primary hover:underline">
            Sign in
          </Link>{" "}
          or{" "}
          <Link to="/auth/register" className="font-semibold text-primary hover:underline">
            join free
          </Link>{" "}
          to share your story with the city.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
      <div className="flex gap-3">
        {/* Avatar */}
        <div
          className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold uppercase"
        >
          {user?.username?.[0] ?? "U"}
        </div>

        {/* Input area */}
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={placeholder}
            rows={2}
            className="w-full resize-none rounded-xl border-none bg-muted px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />

          {/* Toolbar */}
          <div className="mt-2 flex items-center justify-between">
            <div className="flex gap-1">
              <button
                type="button"
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
                aria-label="Attach image"
              >
                <Image className="h-4 w-4" />
              </button>
              <button
                type="button"
                className="rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
                aria-label="Emoji"
              >
                <Smile className="h-4 w-4" />
              </button>
            </div>

            <button
              type="submit"
              disabled={!text.trim()}
              className="flex items-center gap-1.5 rounded-xl bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-40"
            >
              <Send className="h-3.5 w-3.5" />
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
