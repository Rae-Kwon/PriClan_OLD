import { useLoaderData, useCatch, useParams, json  } from "remix";
import type { LoaderFunction } from "remix";
import invariant from "tiny-invariant"
import { getClan } from "~/server/services/clan-service.server";
import type { Clan } from "~/server/models/clan.server"
import BackButton from "~/components/BackButton";

type LoaderData = { clan: Clan };

export const loader: LoaderFunction = async ({ params }) => {
    try {
        invariant(params.clanId, 'params.clanId is required')
        const clan = await getClan(params.clanId)
        invariant(clan, `Clan not found: ${params.clanId}`)

        return json<LoaderData>({ clan });
    } catch(err) {
        throw new Response("Clan Not Found", {
            status: 404
        })
    }
};

function ClanProfile() {
    const { clan } = useLoaderData() as LoaderData

	return (
        <div>
            <BackButton backTo='/clanlist' />
            <h1>{clan.name}</h1>
            <h2>Member List {clan.memberCount}/30</h2>
            <ul>
                {clan.memberList.map((member, index) => <li key={index}>{member}</li>)}
            </ul>
        </div>
    );
}

export function CatchBoundary() {
    const caught = useCatch()
    const params = useParams()

    if (caught.status === 404) {
        return (
            <div>
                <h1>Clan not found at {params.clanId}</h1>
            </div>
        )
    }
    throw new Error(`Unhandled error: ${caught.status}`)
}

export default ClanProfile;
