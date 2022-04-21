import { useOutletContext } from "remix";
import UserProfile from "~/components/User/UserProfile";
import type { UserSession } from "~/server/services/types.server"


type ContextData = UserSession

function UserProfileRoute() {
    const user = useOutletContext<ContextData>()
	return (
		<div>
			<UserProfile user={user} />
		</div>
	);
}
export default UserProfileRoute;
