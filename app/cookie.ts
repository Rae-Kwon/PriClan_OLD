import {
    createCookieSessionStorage,
    redirect
} from "remix"
import type { UserSession } from "./server/middleware/types.server"

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
    throw new Error("SESSION_SECRET must be set")
}

const storage = createCookieSessionStorage({
    cookie: {
        name: "PCRD_session",
        secure: process.env.NODE_ENV === "production",
        secrets: [sessionSecret],
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 30,
        httpOnly: true,
    },
})

function getUserSession(request: Request) {
    return storage.getSession(request.headers.get("Cookie"))
}

export async function getUserId(request: Request) {
    const session = await getUserSession(request)
    const userId = session.get("userId")
    if (!userId || typeof userId !== "string") return null
    return userId
}

export async function requireUserId(request: Request) {
    const session = await getUserSession(request)
    const userId = session.get("userId")
    if (!userId || typeof userId !== "string") {
        throw redirect('/login')
    }
    return userId
}

export async function logout(request: Request) {
    const session = await getUserSession(request)
    return redirect("/", {
        headers: {
            "Set-Cookie": await storage.destroySession(session)
        }
    })
}

export async function createUserSession({ userId, redirectTo }: UserSession): Promise<object> {
    const session = await storage.getSession()
    session.set("userId", userId);
    return redirect(redirectTo, {
        headers: {
            "Set-Cookie": await storage.commitSession(session)
        }
    })
}
