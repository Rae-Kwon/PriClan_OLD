import bcrypt from "bcryptjs";
import type { ResolvePassword } from "./types.server";

async function hashedPassword(password: string): Promise<string> {
	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);

	return passwordHash;
}

async function checkPassword({ password, hash }: ResolvePassword): Promise<boolean> {
	if (hash === undefined) throw 'Cannot find hashed version of password'

	await bcrypt.compare(password, hash, (err, res) => {
		if (res === true) return true;
		console.log(err.message);
	});

	return false;
}

export { hashedPassword, checkPassword };
