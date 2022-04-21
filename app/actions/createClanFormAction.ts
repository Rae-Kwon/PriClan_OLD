import { json, redirect } from "remix";
import { createClan } from "~/server/services/clan-service.server";
import { updateUser } from "~/server/services/user-service.server";
import type { ClanActionData } from "~/types";

const badRequest = (data: ClanActionData) => json(data, { status: 400 });

export const createClanFormAction = async (request: Request) => {
	const form = await request.formData();
	const clanName = form.get("clan-name");
    const members = form.getAll("member")
    const memberCount = members.length

	if (typeof clanName !== "string" || !(Array.isArray(members))) {
		return badRequest({ formError: "Form not submitted correctly" });
	}

	const fields = { clanName, members, memberCount };

	const clan = await createClan({ clanName, members, memberCount });

    await updateUser({ request, clan: clan.id })

	if (!clan) {
		return badRequest({
			fields,
			formError: "Something went wrong trying to create clan",
		});
	}
    return redirect(`/clan/${clan.id}`)
};
