import { defineSchema, defineTable } from "convex/server"; //
import { v } from "convex/values"; //

export default defineSchema({
  users: defineTable({
    name: v.string(), //
    avatarUrl: v.optional(v.string()), // Optional field for user avatar
    tokenIdentifier: v.string(), // The ID or token from your SvelteKit auth
  }).index("by_token", ["tokenIdentifier"]), // Creating an index makes lookups super fast!
});