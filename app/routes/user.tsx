import { Outlet, LoaderFunction, json, useLoaderData, useActionData } from "remix";
import LoginLogoutButton from "~/components/Buttons/LoginLogoutButton";
import authenticator from "~/server/services/auth.server";
import type { UserSession } from "~/server/services/types.server"


type LoaderData = { user: UserSession };

export const loader: LoaderFunction = async ({ request }) => {
	const user = await authenticator.isAuthenticated(request, {
		failureRedirect: "/login",
	});
	return json({ user });
};

function UserHome() {
	const { user } = useLoaderData<LoaderData>()
	return (
		<div>
			<LoginLogoutButton user={user} />
			<h1>Welcome</h1>
            <Outlet context={user} />
		</div>
	);
}
export default UserHome;
