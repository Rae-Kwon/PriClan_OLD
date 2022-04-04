import { User, UserModel } from "../models/user.server";
import { hashedPassword } from "../middleware/passwordResolver.server";

type UserAuth = {
	username: string;
	password: string;
};

type CreateUser = {
	id: string;
	username: string;
}

async function createUser({ username, password }: UserAuth): Promise<CreateUser> {
	const registerUser = await UserModel.create({
		username,
		passwordHash: await hashedPassword(password),
		createdAt: Date.now(),
		updatedAt: Date.now(),
	});

	console.log(typeof({ id: registerUser.id, username }))
	return { id: registerUser.id, username };
}

export { createUser };
