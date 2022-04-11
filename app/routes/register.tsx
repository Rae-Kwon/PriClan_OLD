import { userAuthFormAction } from "~/routes/actions";
import UserAuthForm from "~/components/UserAuthForm";
import { ActionFunction, useActionData, useLocation } from "remix";

export const action: ActionFunction = async ({ request }): Promise<object> => {
	if (request === null) throw "No request from server";
	return userAuthFormAction(request);
};

function Register(): JSX.Element {
	const actionData = useActionData();
	const usernameFields = actionData?.fields.username;
	const usernameFieldErrors = actionData?.fieldErrors.username;
	const passwordFields = actionData?.fields.password;
	const passwordFieldErrors = actionData?.fieldErrors.password;
	const formError = actionData?.formError;
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
export default Register;
