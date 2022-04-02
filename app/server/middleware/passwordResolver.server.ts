import bcrypt from "bcryptjs";

export async function hashedPassword(password: string) {
	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);

	return passwordHash;
}
