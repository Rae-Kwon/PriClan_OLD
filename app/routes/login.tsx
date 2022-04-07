import { userAuthFormAction } from "~/actions";
import UserAuthForm from "~/components/UserAuthForm";
import { useActionData, useLocation } from "remix";
import type { ActionFunction } from "remix";
import { ActionData } from "~/types";

export const action: ActionFunction = async ({ request }): Promise<object> => {
	if (request === null) throw "No request from server";
	return await userAuthFormAction(request);
};

function Login(): JSX.Element {
	const actionData = useActionData<ActionData>();
	const usernameFields = actionData?.fields?.username;
	const usernameFieldErrors = actionData?.fieldErrors?.username;
	const passwordFields = actionData?.fields?.password;
	const passwordFieldErrors = actionData?.fieldErrors?.password;
	const formError = actionData?.formError
	const { pathname } = useLocation();

	return (
		<UserAuthForm
			title={pathname}
			usernameFields={usernameFields}
			usernameFieldErrors={usernameFieldErrors}
			passwordFields={passwordFields}
			passwordFieldErrors={passwordFieldErrors}
			formError={formError}
		/>
	);
}
export default Login;
