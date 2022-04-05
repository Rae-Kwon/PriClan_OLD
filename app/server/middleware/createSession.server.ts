import {
    createCookieSessionStorage,
    redirect
} from "remix"
import type { UserSession } from "./types.server"

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
    throw new Error("SESSION_SECRET must be set")
}

const storage = createCookieSessionStorage({
    cookie: {
        name: "Priconne_session",
        secure: process.env.NODE_ENV === "production",
        secrets: [sessionSecret],
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true,
    },
})

export async function createUserSession({ userId, redirectTo }: UserSession): Promise<object> {
    const session = await storage.getSession()
    session.set("userId", userId);
    return redirect(redirectTo, {
        headers: {
            "Set-Cookie": await storage.commitSession(session)
        }
    })
}
