import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	workflow: defineTable({
		name: v.string(),
	}),
});
