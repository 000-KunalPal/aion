import { ConvexQueryClient } from "@convex-dev/react-query";
import { notifyManager, QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { DefaultCatchBoundary } from "./components/default-catch-boundary";
import { NotFound } from "./components/not-found";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
export const getRouter = () => {
	if (typeof document !== "undefined") {
		notifyManager.setScheduler(window.requestAnimationFrame);
	}

	const env = import.meta.env as Record<string, string | undefined>;
	const CONVEX_URL = env.VITE_CONVEX_URL;
	if (!CONVEX_URL) {
		throw new Error("missing VITE_CONVEX_URL envar");
	}
	const convex = new ConvexReactClient(CONVEX_URL, {
		unsavedChangesWarning: false,
	});
	const convexQueryClient = new ConvexQueryClient(convex);

	const queryClient: QueryClient = new QueryClient({
		defaultOptions: {
			queries: {
				queryKeyHashFn: convexQueryClient.hashFn(),
				queryFn: convexQueryClient.queryFn(),
			},
		},
	});
	convexQueryClient.connect(queryClient);

	const router = createRouter({
		routeTree,
		defaultPreload: "intent",
		defaultErrorComponent: DefaultCatchBoundary,
		defaultNotFoundComponent: () => <NotFound />,
		context: { queryClient, convexClient: convex, convexQueryClient },
		Wrap: ({ children }: { children: React.ReactNode }) => (
			<ConvexProvider client={convexQueryClient.convexClient}>
				{children}
			</ConvexProvider>
		),
		scrollRestoration: true,
	});

	setupRouterSsrQueryIntegration({ router, queryClient });

	return router;
};
