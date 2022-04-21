import { mongoose } from "../services/db.server";
import type { Clan } from "./types.server";

const clanSchema = new mongoose.Schema({
	clanName: { type: String, required: true, unique: true, dropDups: true },
	members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	memberCount: { type: Number, default: 0 },
}, { timestamps: true });

const ClanModel = mongoose.model<Clan>("Clan", clanSchema);

export { ClanModel };
