import { mongoose } from "../services/db.server";
import type { User } from "./types.server";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			dropDups: true,
		},
		passwordHash: { type: String, required: true },
	},
	{ timestamps: true }
);

const UserModel = mongoose.model<User>("User", userSchema);

export { UserModel };
