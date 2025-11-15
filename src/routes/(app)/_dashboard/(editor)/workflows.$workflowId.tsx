import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/(app)/_dashboard/(editor)/workflows/$workflowId"
)({
	component: RouteComponent,
});

function RouteComponent() {
	const { workflowId } = Route.useParams();
	return <div>workflow Id: {workflowId}</div>;
}
