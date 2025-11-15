import agent from "@convex-dev/agent/convex.config";
import betterAuth from "@convex-dev/better-auth/convex.config";
import workflow from "@convex-dev/workflow/convex.config.js";
import autumn from "@useautumn/convex/convex.config";
import { defineApp } from "convex/server";

const app = defineApp();
app.use(betterAuth);
app.use(workflow);
app.use(agent);
app.use(autumn);

export default app;
