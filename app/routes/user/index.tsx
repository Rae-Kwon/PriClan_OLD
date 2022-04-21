import {
	useOutletContext,
} from "remix";
import UserProfile from "~/components/User/UserProfile";
import type { UserSession } from "~/server/services/types.server"


type ContextData = UserSession;

function UserIndexRoute() {
	const user = useOutletContext<ContextData>();
	return <UserProfile user={user} />;
}
export default UserIndexRoute;
