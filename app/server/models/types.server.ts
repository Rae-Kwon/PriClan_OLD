import { mongoose } from "../services/db.server";

type Clan = {
	_id?: mongoose.Types.ObjectId
	name: string;
	memberList: [mongoose.Types.ObjectId];
	memberCount: number;
};

type User = {
	username: string;
	passwordHash: string;
	createdAt: Date;
	updatedAt: Date;
};

export type { Clan, User }