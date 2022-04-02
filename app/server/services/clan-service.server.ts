import { ClanModel } from '../models/clan.server'

async function getClans() {
    const clans = await ClanModel.find()
    return clans
}

async function getClan(id: string) {
    const clan = await ClanModel.findById(id)
    return clan
}

export { getClan, getClans }
