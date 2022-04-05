import { ClanModel } from '../models/clan.server'

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

export { getClan, getClans }
