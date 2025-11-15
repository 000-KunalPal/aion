import { api } from "@convex/_generated/api";
import { convexQuery } from "@convex-dev/react-query";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute(
	"/(app)/_dashboard/(automation)/_automation/workflows"
)({
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
	const { data: workflows } = useSuspenseQuery(
		convexQuery(api.private.workflows.get, {})
	);
	return (
		<div>
			{JSON.stringify(user.name)}
			{workflows.map((workflow) => (
				<div key={workflow._id}>{workflow.name}</div>
			))}
			<Button>Create workflow</Button>
		</div>
	);
}
