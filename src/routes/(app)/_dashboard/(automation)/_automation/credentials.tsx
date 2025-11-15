import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/(app)/_dashboard/(automation)/_automation/credentials"
)({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/_app/(dashboard)/(rest)/credentials"!</div>;
}
