import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const Route = createFileRoute("/(app)/_dashboard")({
	beforeLoad: ({ context }) => {
		if (!context.userId) {
			throw redirect({ to: "/auth" });
		}
	},
	component: DashboardLayout,
});

function DashboardLayout() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<SidebarInset className="bg-accent/20">
				<Outlet />
			</SidebarInset>
		</SidebarProvider>
	);
}
