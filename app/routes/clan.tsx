import { Outlet, LoaderFunction, redirect, useLoaderData, json, useActionData, ActionFunction } from "remix";
import { getUsers } from "~/server/services/user-service.server";
import CreateClan from "~/components/Clan/CreateClan";
import { createClanFormAction } from "~/actions/index"
import authenticator from "~/server/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
	const user = await authenticator.isAuthenticated(request, {
		failureRedirect: "/login"
	});
	const users = await getUsers()
	return json({ user, users });
};

export const action: ActionFunction = async ({ request }) => {
	return await createClanFormAction(request)
}

function ClanRoute(): JSX.Element {
	const { user, users } = useLoaderData();
	const data = useActionData()
	console.log(data)
	return (
		<div>
			<h1>Clan Page</h1>
			<main>{user.clan ? <Outlet /> : <CreateClan users={users} />}</main>
		</div>
	);
}
export default ClanRoute;
