import Link from "next/link";
import LangSwitch from "./LangSwitch";
import Logo from "./Logo";

const columns = [
  {
    title: "Community",
    links: [
      { label: "Events", href: "/events" },
      { label: "Team", href: "/team" },
      { label: "Linktree", href: "#" },
    ],
  },

  {
    title: "Prganization",
    links: [
      { label: "About", href: "#" },
      { label: "Team", href: "/team" },
      { label: "Contact", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#121D26] border-t text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-60 md:grid-cols-2">
          <div className="mr-20">
            <div className="flex items-center gap-3">
              <Logo src="/logo_2.png" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-white">AWSSBG</span>
                <span className="text-[10px] text-slate-400">
                  University of Khartoum
                </span>
              </div>
            </div>
            <p className="mt-3 max-w-xs text-sm">
              AWS Student Builder Group — a student-led technology community
              exploring cloud computing, software engineering, and real-world
              building.
            </p>
            <div className="mt-4 flex gap-4 text-sm">
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">X</a>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {" "}
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-white">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-white">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t flex justify-between mt-15 pt-8">
          <p className="border-slate-700 text-xs">
            © {new Date().getFullYear()} AWSSBG · University of Khartoum
          </p>
          <LangSwitch />
        </div>
      </div>
    </footer>
  );
}
