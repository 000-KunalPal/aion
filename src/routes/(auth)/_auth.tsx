import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_auth")({
	beforeLoad: ({ context }) => {
		if (context.userId) {
			throw redirect({ to: "/workflows" });
		}
	},
	component: () => <Outlet />,
});
