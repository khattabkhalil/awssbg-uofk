"use client";

import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LangSwitch from "./LangSwitch";

const links = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-3 font-bold text-slate-900"
        >
          <Logo src="/logo_1.png" />
          <span className="flex flex-col leading-tight">
            <span>AWSSBG</span>
            <span className="text-[10px] font-normal text-slate-500">
              University of Khartoum
            </span>
          </span>
        </Link>
        <nav className="flex gap-8 text-sm">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "border-b-2 border-purple-500 font-semibold text-slate-900"
                    : "text-slate-500 hover:text-slate-900"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <LangSwitch />
      </div>
    </header>
  );
}
