import { mongoose } from "../services/db.server";
import type { User } from "./types.server"

const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	passwordHash: { type: String, required: true },
	createdAt: { type: Date, required: false },
	updatedAt: { type: Date, required: false },
});

const UserModel = mongoose.model<User>("User", userSchema);

export { UserModel };
