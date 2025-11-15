import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
	"/(app)/_dashboard/(automation)/_automation/credentials/$credentialId"
)({
	component: RouteComponent,
});

function RouteComponent() {
	const { credentialId } = Route.useParams();
	return <div>credentialId: {credentialId}</div>;
}
