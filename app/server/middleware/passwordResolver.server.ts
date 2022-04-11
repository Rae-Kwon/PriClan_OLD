import bcrypt from "bcryptjs";

async function hashedPassword(password: string): Promise<string> {
	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);

	return passwordHash;
}

async function checkPassword(password: string, passwordHash: string): Promise<boolean> {
	if (passwordHash === null) throw 'Cannot find hashed version of password'

	return await bcrypt.compare(password, passwordHash)
}

export { hashedPassword, checkPassword };
