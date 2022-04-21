import { mongoose } from "../services/db.server";

type Clan = {
	_id?: mongoose.Types.ObjectId
	clanName: string;
	members: [string];
	memberCount: number;
	createdAt: Date;
	updatedAt: Date;
};

type User =  {
	id?: mongoose.Types.ObjectId;
	username?: string;
	email: string;
	passwordHash: string;
	clan: mongoose.Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
};

export type { Clan, User }