import { requireUserId } from "~/cookie";
import { useActionData, Outlet, json, LoaderFunction, useLoaderData } from "remix";
import type { ActionFunction } from "remix";
import UserAuthForm from "~/components/UserAuthForm";
import { userAuthFormAction } from "~/actions";

export const loader: LoaderFunction = async ({ request }) => {
	const userId = await requireUserId(request);

	return json(userId)
}

export const action: ActionFunction = async ({ request }) => {
	if (request === null) throw "No request from server";
	const actionData = await userAuthFormAction(request);

	return actionData
};

function Home() {
	const actionData = useActionData();
	const usernameFields = actionData?.fields?.username;
	const usernameFieldErrors = actionData?.fieldErrors?.username;
	const passwordFields = actionData?.fields?.password;
	const passwordFieldErrors = actionData?.fieldErrors?.password;
	const formError = actionData?.formError;

	return (
		<div>
				<div>
					<UserAuthForm
						title={"Login"}
						usernameFields={usernameFields}
						usernameFieldErrors={usernameFieldErrors}
						passwordFields={passwordFields}
						passwordFieldErrors={passwordFieldErrors}
						formError={formError}
					/>
				</div>
		</div>
	);
}
export default Home;
