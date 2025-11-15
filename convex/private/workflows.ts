import { ConvexError } from "convex/values";
import { query } from "../_generated/server";

export const get = query({
	args: {},
	handler: async (ctx) => {
		const identity = await ctx.auth.getUserIdentity();
		if (identity === null) {
			throw new ConvexError({
				code: "UNAUTHORIZED",
				message: "User not found",
			});
		}
		const workflows = await ctx.db.query("workflow").collect();
		return workflows;
	},
});
