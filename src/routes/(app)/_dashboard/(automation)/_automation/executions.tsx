import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/(app)/_dashboard/(automation)/_automation/executions"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_app/(dashboard)/(rest)/executions"!</div>;
}
