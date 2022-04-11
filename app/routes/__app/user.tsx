import { Outlet, LoaderFunction, json } from "remix";
import { requireUserId } from "~/cookie";


export const loader: LoaderFunction = async ({ request }) => {
	const userId = await requireUserId(request);

	return json(userId)
}

function UserHome() {
	return (
		<div>
			<h1>Welcome</h1>
            <Outlet />
		</div>
	);
}
export default UserHome;
