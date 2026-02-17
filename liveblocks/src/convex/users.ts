import { query } from "./_generated/server"; //
import { v } from "convex/values"; //

// SvelteKit calls this via `api.users.getUserByToken`
export const getUserByToken = query({ //
  // We expect SvelteKit to pass a "token" string
  args: { token: v.string() }, //
  
  handler: async (ctx, args) => { //
    // Search the "users" table using the index we just created
    return await ctx.db 
      .query("users") //
      .withIndex("by_token", (q) => q.eq("tokenIdentifier", args.token)) //
      .unique(); // unique() returns a single document or null
  },
});