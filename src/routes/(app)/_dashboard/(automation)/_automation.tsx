import { createFileRoute, Outlet } from "@tanstack/react-router";

import { AppHeader } from "@/components/app-header";

export const Route = createFileRoute(
	"/(app)/_dashboard/(automation)/_automation"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<AppHeader />
			<main className="flex-1">
				<Outlet />
			</main>
		</>
	);
}
