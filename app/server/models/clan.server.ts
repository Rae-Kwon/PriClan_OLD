import { mongoose } from "../services/db.server";

type Clan = {
	_id?: mongoose.Types.ObjectId
	name: string;
	memberList: [mongoose.Types.ObjectId];
	memberCount: number;
};

const clanSchema = new mongoose.Schema({
	name: { type: String, required: true },
	memberList: [{ type: mongoose.Schema.Types.ObjectId , ref: 'User'}],
	memberCount: { type: Number, required: true },
});

const ClanModel = mongoose.model<Clan>("Clan", clanSchema);

export { ClanModel };
export type { Clan };
