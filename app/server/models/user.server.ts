import { mongoose } from "../services/db.server";
import type { User } from "./types.server";

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			dropDups: true,
		},
		username: { type: String },
		passwordHash: { type: String, required: true },
		clan: { type: mongoose.Schema.Types.ObjectId, ref: "Clan" }
	},
	{ timestamps: true }
);

const UserModel = mongoose.model<User>("User", userSchema);

export { UserModel };
