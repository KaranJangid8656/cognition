import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
  { name: "Introduction", href: "/trends/learn" },
  { name: "AI agents vs. AI assistants", href: "/trends/learn/types" },
  { name: "Types of Agents", href: "/trends/learn/applications" },
  { name: "Components", href: "/trends/learn/how" },
  { name: "Protocols", href: "/trends/learn/architectures" },
  { name: "Multi Agent Systems", href: "/trends/learn/prompts" },
  {
    name: "Frameworks",
    href: "/trends/learn/frameworks",
  },
  {
    name: "Ethics & Safety",
    href: "/trends/learn/ethics-safety",
  },
  { name: "Use Cases / Applications", href: "/trends/learn/use-cases" },
  
];

export default function LearnSidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-72 pr-6 py-8 border-r border-border bg-muted/30 min-h-screen group transition-all duration-200 hover:border-blue-500 hover:border-r-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
      <nav className="flex flex-col gap-2">
        {sidebarLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={[
  "rounded px-3 py-2 text-sm font-medium transition-colors hover:text-pink-700",
  (link.href === "/trends/learn" && (pathname === "/trends/learn" || pathname === "/trends/learn/page")) || pathname === link.href
    ? "text-foreground font-semibold border-l-4 border-blue-500 bg-muted/50"
    : "text-muted-foreground"
].join(" ")}

          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
