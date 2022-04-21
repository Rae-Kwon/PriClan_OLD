import { useLoaderData, useCatch, useParams, json, Outlet } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant";
import { getClan } from "~/server/services/clan-service.server";
import type { Clan, User } from "~/server/models/types.server";
import BackButton from "~/components/Buttons/BackButton";
import LoginLogout from "~/components/Buttons/LoginLogoutButton";
import authenticator from "~/server/services/auth.server";

type LoaderData = { clan: Clan; user: User };

export const loader: LoaderFunction = async ({
	params,
	request,
}): Promise<object> => {
	const user = await authenticator.isAuthenticated(request, {
		failureRedirect: "/login"
	});
	invariant(params.clanId, "params.clanId is required");
	const clan = await getClan(params.clanId);
	return json({ clan, user });
};

function ClanProfile(): JSX.Element {
	const { clan, user } = useLoaderData<LoaderData>();
	return (
		<div>
			<BackButton backTo="/clanlist" />
			<LoginLogout user={user} />
			<h1>{clan.clanName}</h1>
			<h2>Member List {clan.memberCount}/30</h2>
			{clan.members && (
				<ul>
					{clan.members.map((memberId, index) => {
						console.log("INside MList", memberId)
						return <li key={index}>{memberId}</li>
})}
				</ul>
			)}
		</div>
	);
}

export function CatchBoundary(): JSX.Element {
	const params = useParams();

	return (
		<div>
			<h1>Clan not found at {params.clanId}</h1>
		</div>
	);
}

export default ClanProfile;
