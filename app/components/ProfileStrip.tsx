import { useState } from "react";

interface ProfileStripUser {
  id: string;
  username: string;
  avatar: string;
  initials: string;
  color: string;
}

const STRIP_USERS: ProfileStripUser[] = [
  { id: "1",  username: "maya_builds",    avatar: "", initials: "MB", color: "#FF6B2B" },
  { id: "2",  username: "jaxthecreator", avatar: "", initials: "JC", color: "#7C3AED" },
  { id: "3",  username: "tara.designs",   avatar: "", initials: "TD", color: "#0EA5E9" },
  { id: "4",  username: "founder.felix",  avatar: "", initials: "FF", color: "#10B981" },
  { id: "5",  username: "spincity_nina",  avatar: "", initials: "SN", color: "#F59E0B" },
  { id: "6",  username: "hustler.leo",    avatar: "", initials: "HL", color: "#EC4899" },
  { id: "7",  username: "crea8or_vee",    avatar: "", initials: "CV", color: "#FF6B2B" },
  { id: "8",  username: "bizwiz_sam",     avatar: "", initials: "BS", color: "#7C3AED" },
  { id: "9",  username: "the.real.kai",   avatar: "", initials: "TK", color: "#0EA5E9" },
  { id: "10", username: "priya.grows",    avatar: "", initials: "PG", color: "#10B981" },
  { id: "11", username: "spinwithzara",   avatar: "", initials: "SZ", color: "#F59E0B" },
  { id: "12", username: "movers.omar",    avatar: "", initials: "MO", color: "#EC4899" },
];

// Duplicate for seamless loop
const DUPLICATED = [...STRIP_USERS, ...STRIP_USERS];

export function ProfileStrip() {
  const [paused, setPaused] = useState(false);

  return (
    <div className="relative w-full overflow-hidden py-3">
      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12"
        style={{
          background: "linear-gradient(to right, var(--background) 0%, transparent 100%)",
        }}
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12"
        style={{
          background: "linear-gradient(to left, var(--background) 0%, transparent 100%)",
        }}
      />

      {/* Scrolling track */}
      <div
        className="flex gap-4"
        style={{
          animation: paused ? "none" : "spincity-rtl 28s linear infinite",
          width: "max-content",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {DUPLICATED.map((u, i) => (
          <ProfilePill key={`${u.id}-${i}`} user={u} />
        ))}
      </div>

      <style>{`
        @keyframes spincity-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .spincity-strip { animation: none !important; }
        }
      `}</style>
    </div>
  );
}

function ProfilePill({ user }: { user: ProfileStripUser }) {
  return (
    <div className="group flex flex-col items-center gap-1 cursor-pointer select-none">
      <div
        className="relative h-12 w-12 rounded-full flex items-center justify-center text-white text-sm font-bold ring-2 ring-border group-hover:ring-primary transition-all"
        style={{ backgroundColor: user.color }}
      >
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.username}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          user.initials
        )}

        {/* Follow badge on hover */}
        <span className="absolute -bottom-1 -right-1 hidden group-hover:flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground shadow">
          +
        </span>
      </div>
      <span className="max-w-[72px] truncate text-[10px] text-muted-foreground">
        {user.username}
      </span>
    </div>
  );
}
