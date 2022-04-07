import { Outlet, LoaderFunction, redirect, useLoaderData } from "remix";
import { requireUserId } from "~/cookie";
import LoginLogout from "~/components/LoginLogoutButton";

export const loader: LoaderFunction = async ({ request }) => {
	const userId = await requireUserId(request);

	return userId
}

function ClanRoute(): JSX.Element {
	return (
		<div>
			<h1>Clan Page</h1>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
export default ClanRoute;
