import type { UserSession } from "~/server/services/types.server";

type UserAuthFormProps = {
	title: string;
	error: string;
	checkErrorField: string;
};

type UserProfileProps = {
	user: UserSession;
};

type FormField = {
	value: string;
	hasError: boolean;
	error: string;
};

type FormErrorValidationState = {
	email: FormField;
	password: FormField;
	passwordCheck: FormField;
};

export type { UserAuthFormProps, UserProfileProps, FormErrorValidationState };
