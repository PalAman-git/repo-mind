import { AppSidebar } from "@/features/dashboard/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import TopBar from "@/features/dashboard/components/TopBar";

export default function RepoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-svh flex-col">
      <TopBar />

      <SidebarProvider className="min-h-0 flex-1">
        <AppSidebar />

        <main className="min-w-0 flex-1">
          {children}
        </main>
      </SidebarProvider>
    </div>
  );
}