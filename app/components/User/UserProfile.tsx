import { UserProfileProps } from "../types";

function UserProfile({ user }: UserProfileProps) {
	return (
		<div>
			<h1>{user.email}</h1>
			<h2>{user.username}</h2>
		</div>
	);
}

export default UserProfile;
