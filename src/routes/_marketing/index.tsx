import { createFileRoute, Link } from "@tanstack/react-router";

import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import { Loader2Icon } from "lucide-react";

export const Route = createFileRoute("/_marketing/")({
	component: Marketing,
});

function Marketing() {
	return (
		<>
			<Authenticated>
				You are welcomed! - <Link to="/dashboard">Dashboard</Link>
			</Authenticated>
			<Unauthenticated>
				You are Unauthenticated - <Link to="/auth">Sign In</Link>
			</Unauthenticated>
			<AuthLoading>
				<Loader2Icon />
			</AuthLoading>
		</>
	);
}
