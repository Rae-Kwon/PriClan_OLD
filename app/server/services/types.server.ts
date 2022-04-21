import { mongoose } from "../services/db.server";

type UserAuth = {
	email: string;
	password: string;
	url: string;
};

type UserSession = {
	id?: string | null;
	email?: string | null;
}

type UserUpdate = {
	request: Request;
	username?: string;
	email?: string;
	password?: string;
	clan?: mongoose.Types.ObjectId;
}

type CreateClan = {
	clanName: string;
	members: FormDataEntryValue[];
	memberCount: number;
}

type CreateClanForm = {
	id: mongoose.Types.ObjectId;
	clanName: string;
}

export type { UserAuth, UserSession, UserUpdate, CreateClan, CreateClanForm }