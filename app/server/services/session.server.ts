import {
    createCookieSessionStorage,
} from "remix"

const sessionSecret = process.env.SESSION_SECRET
if (!sessionSecret) {
    throw new Error("SESSION_SECRET must be set")
}

export const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "PCRD_session",
        secure: process.env.NODE_ENV === "production",
        secrets: [sessionSecret],
        sameSite: "lax",
        path: "/",
        httpOnly: true,
    },
})

export const { getSession, commitSession, destroySession } = sessionStorage
