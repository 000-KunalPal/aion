import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/_marketing/_marketing/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(app)/_marketing/"!</div>;
}
