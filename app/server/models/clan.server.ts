import { mongoose } from "../services/db.server";
import type { Clan } from "./types.server"

const clanSchema = new mongoose.Schema({
	name: { type: String, required: true },
	memberList: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
	memberCount: { type: Number, required: true },
});

const ClanModel = mongoose.model<Clan>("Clan", clanSchema);

export { ClanModel };
