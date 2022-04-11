import { json } from "remix";
import type { ActionData } from "~/types";
import { createUser, loginUser } from "~/server/services/user-service.server";
import { createUserSession } from "~/cookie";

function getUrlSlug(pathname: string): string {
    return pathname.substring(pathname.lastIndexOf('/') + 1)
}

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

const badRequest = (data: ActionData): object => json(data, { status: 400 });

export const userAuthFormAction = async (request: Request) => {
    const form = await request.formData();
	const username = form.get("username");
	const password = form.get("password");
    const urlSlug = getUrlSlug(request.url)
    let redirectTo = '/user'

	if (
        typeof username !== "string" || 
        typeof password !== "string" || 
        typeof redirectTo !== "string"
        ) {
		return badRequest({
			formError: "Form not submitted correctly",
		});
	}

	const fields = { username, password };
	const fieldErrors = {
		username: validateUsername(username),
		password: validatePassword(password),
	};
	if (Object.values(fieldErrors).some(Boolean)) return badRequest({ fieldErrors, fields });

    switch(urlSlug) {
        case "":
        case "login": {
            const user = await loginUser({ username, password })
            if(!user) {
                return badRequest({
                    fields,
                    formError: 'Username or Password is incorrect'
                })
            }
            const userId = user.id
            redirectTo += `/${userId}`
            return createUserSession({ userId, redirectTo })
        }

        case "register": {
            const user = await createUser({ username, password });
            if (!user) {
                return badRequest({
                    fields,
                    formError: "Something went wrong trying to create a new user",
                });
            }
            const userId = user.id
            redirectTo += `/${userId}`
            return createUserSession({ userId, redirectTo })
        }

        default: {
            return badRequest({
                fields,
                formError: 'Login type is invalid'
            })
        }

    }
}