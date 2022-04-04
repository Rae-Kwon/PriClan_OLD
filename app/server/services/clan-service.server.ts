import { ClanModel } from '../models/clan.server'
import type { Clan } from '../models/clan.server'

async function getClans() {
    const clans = await ClanModel.find()
    return clans
}

async function getClan(id: string) {
    const clan = await ClanModel.findById(id)
    console.log(clan)
    return clan
}

export { getClan, getClans }
