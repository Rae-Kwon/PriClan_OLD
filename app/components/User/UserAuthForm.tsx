import type { UserAuthFormProps, FormErrorValidationState } from "../types";
import { Form } from "remix";
import { useState } from "react";
import {
	formValidationState,
	onChangeHandler,
	onInputChange,
	onSubmitErrors,
} from "./UserAuthFormHandlers";

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
	const [formValidation, setFormValidation] = useState(formValidationState);
	const submitErrors = onSubmitErrors(error, checkErrorField);
	const [isSubmitted, setIsSubmitted] = useState(false);

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
						value={formValidation.email.value}
						onChange={(event) =>
							onChangeHandler({
								event,
								setIsSubmitted,
								setFormValidation,
							})
						}
					/>
					{isSubmitted ? (
						<div>{formValidation.email.error}</div>
					) : null}
				</div>
				{title.includes("register") && (
					<div>
						<label htmlFor="username-input">Set Username: </label>
						<input
							type="text"
							id="username-input"
							name="username"
							value={formValidation.username.value}
							onChange={(event) =>
								onChangeHandler({
									event,
									setIsSubmitted,
									setFormValidation,
								})
							}
						/>
						{isSubmitted ? (
							<div>{formValidation.username.error}</div>
						) : null}
					</div>
				)}
				<div>
					<label htmlFor="password-input">Password</label>
					<input
						type="password"
						id="password-input"
						name="password"
						required
						value={formValidation.password.value}
						onChange={(event) =>
							onChangeHandler({
								event,
								setIsSubmitted,
								setFormValidation,
							})
						}
					/>
					{formValidation.password.hasError ? (
						<div>{formValidation.password.error}</div>
					) : isSubmitted ? (
						<div>{formValidation.password.error}</div>
					) : null}
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
							value={formValidation.passwordCheck.value}
							onChange={(event) =>
								onChangeHandler({
									event,
									setIsSubmitted,
									setFormValidation,
								})
							}
						/>
						{isSubmitted ? (
							<div>{formValidation.passwordCheck.error}</div>
						) : null}
					</div>
				)}
				<button type="submit" onClick={() => setIsSubmitted(true)}>
					{title.includes("login") ? "Sign In" : "Sign Up"}
				</button>
			</Form>
		</div>
	);
}
export default UserAuthForm;
