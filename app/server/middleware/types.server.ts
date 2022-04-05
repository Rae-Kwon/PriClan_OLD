type UserSession = {
    userId: string,
    redirectTo: string
}

type ResolvePassword = {
    password: string,
    hash?: string,
}


export type { UserSession, ResolvePassword }
