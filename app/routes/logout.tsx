import type { ActionFunction, LoaderFunction } from "remix";
import authenticator from "~/server/services/auth.server";

export const loader: LoaderFunction = async ({ request }) => {
    await authenticator.isAuthenticated(request, {
        failureRedirect: '/login'
    })
}

export const action: ActionFunction = async ({ request }) => {
    await authenticator.logout(request, { redirectTo: "/" })
}
