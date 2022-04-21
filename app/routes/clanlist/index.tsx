import { useLoaderData, json, Link, Outlet } from "remix";
import type { LoaderFunction } from "remix";
import { getClans } from "~/server/services/clan-service.server";
import type { Clan } from "~/server/models/types.server";

type LoaderData = { clans: Array<Clan> };

export const loader: LoaderFunction = async (): Promise<object> => {
	const clans = {
		clans: await getClans(),
	};
	return json(clans);
};

function ClanHome(): JSX.Element {
	const { clans } = useLoaderData<LoaderData>();
	return (
		<div>
			<h1>Clan Page</h1>
			<ul>
				{clans.map((clan) => {
					let clanId = clan._id ? clan._id.toString() : null;
					return (
						<li key={clanId}>
							<Link to={`/clan/${clanId}`}>{clan.clanName}</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}
export default ClanHome;
