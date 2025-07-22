"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const agentSections = [
  { name: "Cores", href: "https://cognition-core-xi.vercel.app/" },
  { name: "Learn Agents in AI", href: "/trends/learn" },
  { name: "Workflow & Architecture", href: "/trends/workflow" },
  { name: "Real World Models", href: "/trends/models" },
];

export default function AgentsNavbar() {
  const pathname = usePathname();
  return (
    <>
      <div className="h-12 w-full" />
      <nav className="fixed top-16 left-0 w-full z-40 bg-background mb-8">
        <div className="container flex h-12 items-center gap-6 justify-end">
          {agentSections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className={`text-sm font-medium transition-colors hover:text-pink-500 ${
                (section.href === "/trends" && pathname === "/trends")
                  ? "text-pink-500"
                  : (section.href === "/trends/learn" && pathname.startsWith("/trends/learn"))
                  ? "text-pink-500"
                  : pathname === section.href
                  ? "text-pink-500"
                  : "text-muted-foreground"
              }`}
            >
              {section.name}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
