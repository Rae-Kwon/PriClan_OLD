import UserAuthForm from "~/components/User/UserAuthForm";
import { ActionFunction, useLocation, LoaderFunction, json, useActionData } from "remix";
import { AuthorizationError } from "remix-auth";
import authenticator from "~/server/services/auth.server";

export const action: ActionFunction = async ({ request, context }) => {
	try {
		return await authenticator.authenticate("user-pass", request, {
			successRedirect: "/user",
			throwOnError: true,
			context,
		});
	} catch (error) {
		if (error instanceof Response) return error;
		if (error instanceof AuthorizationError) {
			return json({ error: error.message });
		}
		return error;
	}
};

export const loader: LoaderFunction = async ({ request }) => {
	return await authenticator.isAuthenticated(request, {
		successRedirect: "/user",
	});
};

function Register(): JSX.Element {
	const data = useActionData();
	const { pathname } = useLocation();
	console.log("data ", data)

	return (
		<UserAuthForm
			title={pathname}
			error={data?.error}
			checkErrorField={data?.error.toLowerCase()}
		/>
	);
}
export default Register;
