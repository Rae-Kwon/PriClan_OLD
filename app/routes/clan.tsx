import {
	Outlet,
	LoaderFunction,
	redirect,
	useLoaderData,
	json,
	useActionData,
	ActionFunction,
} from "remix";
import { getUsers } from "~/server/services/user-service.server";
import CreateClan from "~/components/Clan/CreateClan";
import { createClanFormAction } from "~/actions/index";
import authenticator from "~/server/services/auth.server";
import { getSession } from "~/server/services/session.server";

export const loader: LoaderFunction = async ({ request }) => {
	const user = await authenticator.isAuthenticated(request, {
		failureRedirect: "/login",
	});
	const users = await getUsers();
	return json({ user, users });
};

export const action: ActionFunction = async ({ request }) => {
	const session = await getSession(request.headers.get("cookie"))
	const { id } = session.get(authenticator.sessionKey)
	return await createClanFormAction(request, id);
};

function ClanRoute(): JSX.Element {
	const { user, users } = useLoaderData();
	const data = useActionData();
	return (
		<div>
			<h1>Clan Page</h1>
			<main>{user.clan ? <Outlet /> : <CreateClan users={users} />}</main>
		</div>
	);
}
export default ClanRoute;
