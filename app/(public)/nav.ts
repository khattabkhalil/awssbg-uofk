export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Community",
    links: [
      { label: "Events", href: "/events" },
      { label: "Team", href: "/team" },
      { label: "Linktree", href: "#" },
    ],
  },
  {
    title: "Organization",
    links: [
      { label: "About", href: "#" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "#" },
    ],
  },
] as const;

export const SOCIAL_LINKS = [
  { label: "GitHub", href: "#", icon: "github" },
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "X", href: "#", icon: "x" },
  { label: "Email", href: "#", icon: "mail" },
] as const;
