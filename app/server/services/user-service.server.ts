import { UserModel } from "../models/user.server";
import {
	checkPassword,
	hashedPassword,
} from "../middleware/passwordResolver.server";
import type { UserAuth, UserEntryForm } from "./types.server";
import { getUserId, logout } from "../../cookie";

async function getUser(request: Request): Promise<object | null> {
	const userId = await getUserId(request)
	if (typeof userId !== "string") return null

	try {
		const user = await UserModel.findOne({ _id: userId });
		return user;
	} catch {
		throw logout(request)
	}
}

async function loginUser({
	username,
	password,
}: UserAuth): Promise<UserEntryForm | null> {
	const user = await UserModel.findOne({ username });

	if (!user) return null;
	const isCorrectPassword = await checkPassword(password, user.passwordHash);

	if (!isCorrectPassword) return null;
	return { id: user.id, username };
}

async function createUser({
	username,
	password,
}: UserAuth): Promise<UserEntryForm | null> {
	try {
		const user = await UserModel.create({
			username,
			passwordHash: await hashedPassword(password)
		});

		return { id: user.id, username };
	} catch (err: any) {
		throw new Response("Username is already registered", {
			status: 409,
		});
	}
}

export { getUser, createUser, loginUser };
