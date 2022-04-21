import { ClanModel } from '../models/clan.server'
import type { CreateClan, CreateClanForm } from './types.server'

async function getClans(): Promise<object> {
    const clans = await ClanModel.find()
    return clans
}

async function getClan(id: string): Promise<object>  {
    const clan = await ClanModel.findById(id)

    if (clan === null) {
        throw 'Unable to get Clan'
    }
    return clan
}

async function createClan({ clanName, members, memberCount }: CreateClan): Promise<CreateClanForm> {
    try {
        const clan = await ClanModel.create({ clanName, members, memberCount })
        return { id: clan.id, clanName }
    } catch {
        throw new Response("Clan is already registered", {
			status: 409,
		});
    }
}

export { getClan, getClans, createClan }
