/*
 * Default Configurable Data — seeded into Mongo on first boot.
 *
 * BEFORE EDITING: read ./RULES.md (especially R5: schema and defaults must
 * stay in sync) and ./configurables.schema.ts. For per-type schema and
 * default-value samples, see RULES.md §5 "Field Type Reference".
 */

export type TBrandColor = {
  // Base
  background: string;
  foreground: string;
  // Card
  card: string;
  cardForeground: string;
  // Popover
  popover: string;
  popoverForeground: string;
  // Primary
  primary: string;
  primaryForeground: string;
  // Secondary
  secondary: string;
  secondaryForeground: string;
  // Muted
  muted: string;
  mutedForeground: string;
  // Accent
  accent: string;
  accentForeground: string;
  // Destructive
  destructive: string;
  destructiveForeground: string;
  // Border / Input / Ring
  border: string;
  input: string;
  ring: string;
  // Charts
  chart1?: string;
  chart2?: string;
  chart3?: string;
  chart4?: string;
  chart5?: string;
  // Navbar
  navbarBackground: string;
  // Sidebar
  sidebarBackground: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
};

export type TFont = {
  headingFont: string;
  textFont: string;
};

export type TDefaultConfigurableData = {
  appName: string;
  tagline: string;
  logoUrl: string;
  brandColor: TBrandColor;
  font: TFont;
  // Feed settings
  feedWelcomeMessage: string;
  feedComposerPlaceholder: string;
  feedMaxPlaceholderCards: number;
  showProfileStrip: boolean;
  // About / marketing copy
  aboutText: string;
  footerText: string;
};

export const defaultConfigurablesData: TDefaultConfigurableData = {
  appName: "SpinCity",
  tagline: "Find your home. Build your hustle.",
  logoUrl: "",
  brandColor: {
    // Base
    background:        "#F9F9FB",
    foreground:        "#1A1A2E",
    // Card
    card:              "#ffffff",
    cardForeground:    "#1A1A2E",
    // Popover
    popover:           "#ffffff",
    popoverForeground: "#1A1A2E",
    // Primary (Vivid Orange)
    primary:           "#FF6B2B",
    primaryForeground: "#ffffff",
    // Secondary (Deep Purple)
    secondary:         "#7C3AED",
    secondaryForeground: "#ffffff",
    // Muted
    muted:           "#F3F4F6",
    mutedForeground: "#6B7280",
    // Accent (Vibrant Teal)
    accent:           "#0EA5E9",
    accentForeground: "#ffffff",
    // Destructive
    destructive:           "#ef4444",
    destructiveForeground: "#fafafa",
    // Border / Input / Ring
    border: "#E5E7EB",
    input:  "#E5E7EB",
    ring:   "#FF6B2B",
    // Charts
    chart1: "#FF6B2B",
    chart2: "#7C3AED",
    chart3: "#0EA5E9",
    chart4: "#10B981",
    chart5: "#F59E0B",
    // Navbar
    navbarBackground: "#ffffff",
    // Sidebar
    sidebarBackground:        "#fafafa",
    sidebarForeground:        "#1A1A2E",
    sidebarPrimary:           "#FF6B2B",
    sidebarPrimaryForeground: "#ffffff",
    sidebarAccent:            "#F3F4F6",
    sidebarAccentForeground:  "#1A1A2E",
    sidebarBorder:            "#E5E7EB",
    sidebarRing:              "#FF6B2B",
  },
  font: {
    headingFont: "Poppins",
    textFont: "Inter",
  },
  // Feed settings
  feedWelcomeMessage: "Welcome to SpinCity",
  feedComposerPlaceholder: "What's happening in your city?",
  feedMaxPlaceholderCards: 8,
  showProfileStrip: true,
  // About / marketing copy
  aboutText: "SpinCity is the social platform built for entrepreneurs. Post, connect, and grow — without the big-platform price tag.",
  footerText: "SpinCity — Find your home. Build your hustle.",
};
