import { ActionData } from "~/types"

type UserAuthFormProps = {
    title: string,
    usernameFields?: string,
	usernameFieldErrors?: string,
	passwordFields?: string,
	passwordFieldErrors?: string,
	formError?: string,
}

export type { UserAuthFormProps }