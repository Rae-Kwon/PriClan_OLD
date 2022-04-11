import { useLoaderData, useCatch, useParams, json, Outlet } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getClan } from "~/server/services/clan-service.server";
import type { Clan, User } from "~/server/models/types.server";
import BackButton from "~/components/BackButton";
import { getUser } from "~/server/services/user-service.server";
import LoginLogout from "~/components/LoginLogoutButton";

type LoaderData = { clan: Clan; user: User };

export const loader: LoaderFunction = async ({
	params,
	request,
}): Promise<object> => {
	try {
		invariant(params.clanId, "params.clanId is required");
		const clan = await getClan(params.clanId);
		invariant(clan, `Clan not found: ${params.clanId}`);

		const user = await getUser(request);

		return json({ clan, user });
	} catch (err) {
		throw new Response("Clan Not Found", {
			status: 404,
		});
	}
};

function ClanProfile(): JSX.Element {
	const { clan, user } = useLoaderData<LoaderData>();

	return (
		<div>
			<BackButton backTo="/clanlist" />
			<LoginLogout user={user} />
			<h1>{clan.name}</h1>
			<h2>Member List {clan.memberCount}/30</h2>
			{clan.memberList && (
				<ul>
					{clan.memberList.map((member, index) => (
						<li key={index}>{member}</li>
					))}
				</ul>
			)}
		</div>
	);
}

export function CatchBoundary(): JSX.Element {
	const caught = useCatch();
	const params = useParams();

	if (caught.status === 404) {
		return (
			<div>
				<h1>Clan not found at {params.clanId}</h1>
			</div>
		);
	}
	throw new Error(`Unhandled error: ${caught.status}`);
}

export default ClanProfile;
