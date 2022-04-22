import { UserModel } from "../models/user.server";
import {
	checkPassword,
	hashedPassword,
} from "../middleware/passwordResolver.server";
import type { UserAuth, UserUpdate } from "./types.server";

async function getUsers() {
	const users = await UserModel.find();
	return users;
}

async function getUser(email: string | undefined) {
	const user = await UserModel.findOne({ email });

	if (!user) return null;
	return user;
}

async function getUserById(id: string | undefined) {
	const user = await UserModel.findOne({ id });

	if (!user) return null;
	return user;
}

async function userExists(email: string | undefined) {
	const user = await UserModel.findOne({ email });

	if (!user) return false;
	return true;
}

async function findOrCreateUser({ email, username, password, url }: UserAuth) {
	const user = await UserModel.findOne({ email });

	if (user) {
		const isCorrectPassword = await checkPassword(
			password,
			user.passwordHash
		);

		if (isCorrectPassword)
			return { id: user.id, username: user.username, email: user.email };
	}

	if (!user && url.includes("register")) {
		const registerUser = await UserModel.create({
			email,
			username,
			passwordHash: await hashedPassword(password),
		});

		return {
			id: registerUser.id,
			username: registerUser.username,
			email: registerUser.email,
		};
	}
}

async function updateUser({ id, username, email, password, clan }: UserUpdate) {
	const user = await getUserById(id);
	if (!user) return null;
	try {
		if (username) user.username = username;
		if (email) user.email = email;
		if (password) user.passwordHash = await hashedPassword(password);
		if (clan) user.clan = clan;
		await user.save();

		return { username, email, password, clan };
	} catch {
		throw new Response("Unable to update user", {
			status: 400,
		});
	}
}

export { getUser, getUsers, userExists, findOrCreateUser, updateUser };
