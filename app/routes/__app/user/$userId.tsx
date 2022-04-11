import { json, LoaderFunction, Outlet, useLoaderData } from "remix";
import type { User } from "~/server/models/types.server";
import { getUser } from "~/server/services/user-service.server";

type LoaderData = { user: User }

export const loader: LoaderFunction = async ({ request }) => {
    try {
        const user = await getUser(request)
        return json({ user })
    } catch {
        throw new Response("User not found", {
            status: 404
        })
    }
}

function UserProfile() {
    const { user } = useLoaderData<LoaderData>()
	return (
		<div>
			<h1>{user.username}</h1>
            <h2>{user._id}</h2>
            <Outlet />
		</div>
	);
}
export default UserProfile;
