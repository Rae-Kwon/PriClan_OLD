import bcrypt from "bcryptjs";

async function hashedPassword(password: string): Promise<string> {
	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);

	return passwordHash;
}

export { hashedPassword }
