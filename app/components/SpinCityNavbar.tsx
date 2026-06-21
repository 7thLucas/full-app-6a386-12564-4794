import { Link, Form } from "react-router";
import { Bell, Search, User, LogOut, Zap } from "lucide-react";
import { useAuth } from "~/modules/authentication/use-authentication";
import { useConfigurables } from "~/modules/configurables";

export function SpinCityNavbar() {
  const { config, loading } = useConfigurables();
  const { user, isAuthenticated } = useAuth();

  const appName = loading ? "SpinCity" : (config?.appName ?? "SpinCity");
  const logoUrl = config?.logoUrl ?? "";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[var(--navbar-background)] shadow-sm">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center gap-2 font-bold text-primary text-xl tracking-tight"
          style={{ fontFamily: "var(--heading-font)" }}
        >
          {logoUrl ? (
            <img src={logoUrl} alt={appName} className="h-8 w-auto object-contain" />
          ) : (
            <span className="flex items-center gap-1.5">
              <Zap className="h-5 w-5 text-primary fill-primary" />
              {appName}
            </span>
          )}
        </Link>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Link>

          {isAuthenticated && (
            <button
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>
          )}

          {isAuthenticated ? (
            <div className="flex items-center gap-2">
              <Link
                to="/"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold uppercase"
                aria-label="Profile"
              >
                {user?.username?.[0] ?? <User className="h-4 w-4" />}
              </Link>
              <Form method="post" action="/auth/logout">
                <button
                  type="submit"
                  className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Sign out"
                >
                  <LogOut className="h-4 w-4" />
                </button>
              </Form>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/auth/login"
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Sign in
              </Link>
              <Link
                to="/auth/register"
                className="rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Join free
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
