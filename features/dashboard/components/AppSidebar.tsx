"use client";

import { usePathname, useRouter, useParams } from "next/navigation";
import {
  BarChart3,
  FolderTree,
  LayoutDashboard,
  MessageSquare,
  Lightbulb,
  Settings,
  GitBranch,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";

const navigation = [
  {
    title: "Overview",
    path: "",
    icon: LayoutDashboard,
  },
  {
    title: "Files",
    path: "files",
    icon: FolderTree,
  },
  {
    title: "Analysis",
    path: "analysis",
    icon: BarChart3,
  },
  {
    title: "Insights",
    path: "insights",
    icon: Lightbulb,
  },
  {
    title: "Chat",
    path: "chat",
    icon: MessageSquare,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const params = useParams();

  const owner = params.owner as string;
  const repo = params.repo as string;

  const basePath = `/dashboard/${owner}/${repo}`;

  return (
    <Sidebar collapsible="icon" className="top-14 h-[calc(100svh-3.5rem)]">
      {/* Header */}
      <SidebarHeader>
        <SidebarMenu>
          
        </SidebarMenu>
      </SidebarHeader>


      {/* Navigation */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/45">
            Repository
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => {
                const itemPath = item.path
                  ? `${basePath}/${item.path}`
                  : basePath;

                const isActive = pathname === itemPath;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      tooltip={item.title}
                      onClick={() => router.push(itemPath)}
                      className={`
                        h-9
                        transition-colors
                        font-medium
                        ${
                          isActive
                            ? "bg-white text-gray-900 hover:bg-white hover:text-gray-900"
                            : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                        }
                      `}
                    >
                      <item.icon className="size-4" />

                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => router.push("/dashboard/settings")}
              className="
                text-sidebar-foreground/60
                hover:bg-sidebar-accent
                hover:text-sidebar-foreground
              "
            >
              <Settings className="size-4" />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}