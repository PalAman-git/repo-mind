import Link from "next/link";

import {
  LayoutDashboard,
  FolderGit2,
  Network,
  Bot,
  BrainCircuit,
  Settings,
} from "lucide-react";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Repository",
    href: "/repository",
    icon: FolderGit2,
  },
  {
    title: "Graph",
    href: "/graph",
    icon: Network,
  },
  {
    title: "AI Chat",
    href: "/chat",
    icon: Bot,
  },
  {
    title: "Learn",
    href: "/learn",
    icon: BrainCircuit,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <aside className="hidden w-72 border-r border-border bg-card/40 backdrop-blur-xl lg:flex lg:flex-col">
      <div className="border-b border-border px-6 py-6">
        <h1 className="text-2xl font-bold tracking-tight">
          RepoMind
        </h1>

        <p className="mt-1 text-sm text-muted-foreground">
          AI Software Intelligence
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <Icon size={18} />

              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}