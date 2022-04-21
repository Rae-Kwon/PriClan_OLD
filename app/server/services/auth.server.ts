import { Authenticator, AuthorizationError } from "remix-auth";
import { sessionStorage } from "./session.server";
import type { UserSession } from "./types.server";
import { FormStrategy } from "remix-auth-form";
import {
	findOrCreateUser,
	userExists,
} from "~/server/services/user-service.server";

const authenticator = new Authenticator<UserSession>(sessionStorage, {
	sessionKey: "priclan-session",
	sessionErrorKey: "error-key",
});

authenticator.use(
	new FormStrategy(async ({ form, context }) => {
		const email = form.get("email");
		const password = form.get("password");
		const reenteredPassword = form.get("passwordCheck");
		const url = context.url;

		if (
			typeof email !== "string" ||
			!email.includes("@") ||
			email.length < 1
		)
			throw new AuthorizationError("Invalid email");

		const domainCheck =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (!domainCheck.test(email))
			throw new AuthorizationError("Invalid email");

		if (typeof password !== "string")
			throw new AuthorizationError("Password is invalid");
		if (password.length < 8)
			throw new AuthorizationError(
				"Password must be at least 8 characters long"
			);

		const checkUserExists = await userExists(email);

		if (checkUserExists && url.includes("register"))
			throw new AuthorizationError("User is already registered");

		if (password !== reenteredPassword && url.includes("register"))
			throw new AuthorizationError("Password does not match");

		const user = await findOrCreateUser({ email, password, url });

		if (!user)
			throw new AuthorizationError("Email or Password is incorrect");

		return user;
	}),
	"user-pass"
);

export default authenticator;
