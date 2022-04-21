import { UserProfileProps } from "../types";

function UserProfile({ user }: UserProfileProps) {
    
	return (
		<div>
			<h1>{user.email}</h1>
            <h2>{user.id}</h2>
		</div>
	);
}

export default UserProfile;