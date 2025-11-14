import { api } from "@convex/_generated/api";
import { convexQuery } from "@convex-dev/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/dashboard")({
	component: DashboardComponent,
	beforeLoad: async (opts) => {
		await opts.context.queryClient.prefetchQuery(
			convexQuery(api.user.getCurrentUser, {})
		);
	},
});

function DashboardComponent() {
	const { data: user } = useSuspenseQuery(
		convexQuery(api.user.getCurrentUser, {})
	);
	return <div>{JSON.stringify(user)}</div>;
}
