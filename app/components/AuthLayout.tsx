import { Link } from "react-router";
import { Zap } from "lucide-react";
import { useConfigurables } from "~/modules/configurables";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { config, loading } = useConfigurables();
  const appName = loading ? "SpinCity" : (config?.appName ?? "SpinCity");
  const tagline = loading ? "Find your home. Build your hustle." : (config?.tagline ?? "Find your home. Build your hustle.");
  const logoUrl = config?.logoUrl ?? "";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      {/* Brand header */}
      <Link to="/" className="mb-6 flex flex-col items-center gap-2 text-center">
        {logoUrl ? (
          <img src={logoUrl} alt={appName} className="h-10 w-auto object-contain" />
        ) : (
          <span className="flex items-center gap-2 text-2xl font-bold text-primary" style={{ fontFamily: "var(--heading-font)" }}>
            <Zap className="h-6 w-6 fill-primary" />
            {appName}
          </span>
        )}
        <span className="text-sm text-muted-foreground">{tagline}</span>
      </Link>

      {children}
    </div>
  );
}
