import { Liveblocks } from '@liveblocks/node';
import { ConvexHttpClient } from 'convex/browser';
import { PUBLIC_CONVEX_URL } from '$env/static/public';
import { api } from '../../../convex/_generated/api.js';

const liveblocks = new Liveblocks({
	secret: process.env.LIVEBLOCKS_SECRET_KEY as string
});

const convex = new ConvexHttpClient(PUBLIC_CONVEX_URL);

export async function POST() {
	// 1. Grab the session token.
	// (For testing right now, let's hardcode the token you used in the Convex dashboard)
	const sessionToken = 'test-token-123';

	// 2. Fetch the user from Convex
	const user = await convex.query(api.users.getUserByToken, { token: sessionToken });

	// 3. If no user is found, reject the Liveblocks connection
	if (!user) {
		return new Response('Unauthorized', { status: 403 });
	}

	// 4. Identify the user to Liveblocks!
	const { status, body } = await liveblocks.identifyUser(
		{
			userId: user._id,
			groupIds: [] // Required by Liveblocks Identity type
		},
		{
			userInfo: {
				name: user.name,
				avatar: user.avatarUrl ?? '' // Ensure this isn't undefined
			}
		}
	);
	return new Response(body, { status });
}
