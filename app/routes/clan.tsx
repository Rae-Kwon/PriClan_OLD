import { Outlet } from "remix";

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
