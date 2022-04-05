import type { ActionFunction } from "remix";
import { useActionData, json, Form } from "remix";
import { createUser } from "~/server/services/user-service.server";
import { createUserSession } from "~/server/middleware/createSession.server";

function validateUsername(username: unknown): string | undefined {
	if (typeof username !== "string" || username.length < 3) {
		return "Username must be at least 3 characters long";
	}
}

function validatePassword(password: unknown): string | undefined {
	if (typeof password !== "string" || password.length < 8) {
		return "Password must be at least 8 characters long";
	}
}

type ActionData = {
	formError?: string;
	fieldErrors?: {
		username: string | undefined;
		password: string | undefined;
	};
	fields?: {
		username: string;
		password: string;
	};
};

const badRequest = (data: ActionData): object => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }): Promise<object> => {
	const form = await request.formData();
	const username = form.get("username");
	const password = form.get("password");
	const redirectTo = "/";

	if (typeof username !== "string" || typeof password !== "string") {
		return badRequest({
			formError: "Form not submitted correctly",
		});
	}

	const fields = { username, password };
	const fieldErrors = {
		username: validateUsername(username),
		password: validatePassword(password),
	};
	if (Object.values(fieldErrors).some(Boolean))
		return badRequest({ fieldErrors, fields });

	const user = await createUser({ username, password });
	console.log({ user });
	if (!user) {
		return badRequest({
			fields,
			formError: "Something went wrong trying to create a new user",
		});
	}
	const userId = user.id
	
	return createUserSession({ userId, redirectTo })
};

function Register(): JSX.Element {
	const actionData = useActionData<ActionData>();
    console.log(actionData)
	return (
		<div>
			<h1>Register</h1>
			<Form method="post">
				<div>
					<label htmlFor="username-input">Username</label>
					<input
						type="text"
						id="username-input"
						name="username"
						defaultValue={actionData?.fields?.username}
					/>
				</div>
				<div>
					<label htmlFor="password-input">Password</label>
					<input
						type="password"
						id="password-input"
						name="password"
						defaultValue={actionData?.fields?.password}
					/>
				</div>
				<button type="submit">Submit</button>
			</Form>
		</div>
	);
}
export default Register;
