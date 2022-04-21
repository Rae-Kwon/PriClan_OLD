import type { UserAuthFormProps, FormErrorValidationState } from "../types";
import { Form } from "remix";

function createTitle(title: string): string {
	if (title.includes("/")) {
		let capitalize = title.substring(1, 2).toUpperCase();
		capitalize += title.substring(2);

		return capitalize;
	}

	return title;
}

function UserAuthForm({
	title,
	error,
	checkErrorField,
}: UserAuthFormProps): JSX.Element {
	let emailError;
	let passwordError;
	let passwordCheckError;
	let userError;

	if (
		checkErrorField &&
		checkErrorField.includes("email") &&
		!checkErrorField.includes("password")
	)
		emailError = error;

	if (
		checkErrorField &&
		checkErrorField.includes("password") &&
		!checkErrorField.includes("email") &&
		!checkErrorField.includes("match")
	)
		passwordError = error;

	if (checkErrorField && checkErrorField.includes("match"))
		passwordCheckError = error;

	if (
		(checkErrorField &&
			checkErrorField.includes("email") &&
			checkErrorField.includes("password")) ||
		(checkErrorField && checkErrorField.includes("user"))
	)
		userError = error;

	return (
		<div>
			<h1>{createTitle(title)}</h1>
			<Form method="post" noValidate>
				<div>
					<label htmlFor="email-input">Email</label>
					<input
						type="email"
						id="email-input"
						name="email"
						required
						aria-invalid={Boolean(error)}
						aria-errormessage={error ? "email-error" : undefined}
					/>
					{emailError && (
						<div>{error}</div>
					)}
				</div>
				<div>
					<label htmlFor="password-input">Password</label>
					<input
						type="password"
						id="password-input"
						name="password"
						required
						aria-invalid={Boolean(error)}
						aria-errormessage={error ? "password-error" : undefined}
					/>
					{passwordError && (
						<div>{error}</div>
					)}
				</div>
				{title.includes("register") && (
					<div>
						<label htmlFor="password-confirmation-input">
							Re-enter Password
						</label>
						<input
							type="password"
							name="passwordCheck"
							id="password-confirmation-input"
							required
							aria-invalid={Boolean(error)}
							aria-errormessage={
								error ? "password-check-error" : undefined
							}
						/>
						{passwordCheckError && (
							<div>{error}</div>
						)}
					</div>
				)}
				{userError && (
					<div>{error}</div>
				)}
				<button type="submit">
					{title.includes("login") ? "Sign In" : "Sign Up"}
				</button>
			</Form>
		</div>
	);
}
export default UserAuthForm;
