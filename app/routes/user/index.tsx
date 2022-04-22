import {
    ActionFunction,
	useActionData,
	useOutletContext,
} from "remix";
import UserProfile from "~/components/User/UserProfile";
import authenticator from "~/server/services/auth.server";
import { getSession } from "~/server/services/session.server";
import type { UserSession } from "~/server/services/types.server"

type ContextData = UserSession;

function UserIndexRoute() {
	const user = useOutletContext<ContextData>();
	return <UserProfile user={user} />;
}
export default UserIndexRoute;
