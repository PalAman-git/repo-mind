import { AppSidebar } from "@/features/dashboard/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import TopBar from "@/features/dashboard/components/TopBar";

export default function RepoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-svh flex-col overflow-hidden">
      {/* Full-width top bar */}
      <TopBar />

      {/* Everything below the top bar */}
      <div className="flex min-h-0 flex-1">
        <SidebarProvider>
          <AppSidebar />

          <main className="flex min-w-0 flex-1 flex-col overflow-auto">
            {children}
          </main>
        </SidebarProvider>
      </div>
    </div>
  );
}