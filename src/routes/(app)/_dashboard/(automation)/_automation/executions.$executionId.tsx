import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/(app)/_dashboard/(automation)/_automation/executions/$executionId"
)({
	component: RouteComponent,
});

function RouteComponent() {
	const { executionId } = Route.useParams();
	return <div>executionId: {executionId}</div>;
}
