import type { UserAuthFormProps } from "./types";
import { Form } from "remix";

function createTitle(title: string): string {
	if (title.includes('/')) {
		let capitalize = title.substring(1, 2).toUpperCase();
		capitalize += title.substring(2);

		return capitalize;
	}

	return title
}

function UserAuthForm({
	title,
	usernameFields,
	usernameFieldErrors,
	passwordFields,
	passwordFieldErrors,
	formError,
}: UserAuthFormProps): JSX.Element {
	return (
		<div>
			<h1>{createTitle(title)}</h1>
			<Form method="post">
				<div>
					<label htmlFor="username-input">Username</label>
					<input
						type="text"
						id="username-input"
						name="username"
						defaultValue={usernameFields}
						aria-invalid={Boolean(usernameFieldErrors)}
						aria-errormessage={
							usernameFieldErrors ? "username-error" : undefined
						}
					/>
					{usernameFieldErrors ? (
						<p
							className="form-validation-error"
							role="alert"
							id="username-error"
						>
							{usernameFieldErrors}
						</p>
					) : null}
				</div>
				<div>
					<label htmlFor="password-input">Password</label>
					<input
						type="password"
						id="password-input"
						name="password"
						defaultValue={passwordFields}
						aria-invalid={Boolean(passwordFieldErrors)}
						aria-errormessage={
							passwordFieldErrors ? "password-error" : undefined
						}
					/>
					{passwordFieldErrors ? (
						<p
							className="form-validation-error"
							role="alert"
							id="password-error"
						>
							{passwordFieldErrors}
						</p>
					) : null}
				</div>
				<div id="form-error-message">
					{formError ? (
						<p className="form-validation-error" role="alert">
							{formError}
						</p>
					) : null}
				</div>
				<button type="submit">Submit</button>
			</Form>
		</div>
	);
}
export default UserAuthForm;
