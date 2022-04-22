import type { ChangeEvent, Dispatch, SetStateAction } from "react";

type formValidationStateValue = {
	value: string;
	hasError: boolean;
	error: string;
};

type formValidationStateData = {
	email: formValidationStateValue;
	username: formValidationStateValue;
	password: formValidationStateValue;
	passwordCheck: formValidationStateValue;
};

const formValidationState = {
	email: { value: "", hasError: false, error: "Invalid email" },
	username: { value: "", hasError: false, error: "Invalid username" },
	password: { value: "", hasError: false, error: "Please enter a password" },
	passwordCheck: { value: "", hasError: false, error: "" },
};

type isErrorParams = {
	name: string;
	value: string;
	password?: string;
};

const isError = ({ name, value, password }: isErrorParams) => {
	if (name === "email") {
		const domainCheck =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (
			value.length < 1 ||
			!value.includes("@") ||
			!domainCheck.test(value)
		) {
			return { name: "email", hasError: true, error: "Invalid email" };
		}

		return { name: "email", hasError: false, error: "" };
	}

	if (name === "username") {
		if (typeof value !== "string" || value.length < 1) {
			return {
				name: "username",
				hasError: true,
				error: "Invalid username",
			};
		}
		return { name: "username", hasError: false, error: "" };
	}

	if (name === "password") {
		if (typeof value !== "string" || (value.length > 0 && value.length < 8
            )) {
			return {
				name: "password",
				hasError: true,
				error: "Password must be at least 8 characters",
			};
		}

        if(value.length === 0) {
            return {
				name: "password",
				hasError: true,
				error: "Please enter a password",
			};
        }

		return { name: "password", hasError: false, error: "" };
	}

	if (name === "passwordCheck") {
		if (value !== password) {
			return {
				name: "passwordCheck",
				hasError: true,
				error: "Password does not match",
			};
		}

		return { name: "passwordCheck", hasError: false, error: "" };
	}

	return { hasError: false, error: "" };
};

type onInputChangeParams = {
	event: ChangeEvent<HTMLInputElement>;
	setFormValidation: Dispatch<SetStateAction<formValidationStateData>>;
};

const onInputChange = ({ event, setFormValidation }: onInputChangeParams) => {
	const { name, value } = event.target;

	setFormValidation((prevState) => {
		const password = prevState.password.value;
		const error = isError({ name, value, password });

		return {
			...prevState,
			[name]: {
				value,
				hasError: error?.hasError,
				error: error?.error,
			},
		};
	});
};

const onSubmitErrors = (error?: string, checkError?: string) => {
	let errorMessage = {};
	if (checkError?.includes("email") && !checkError?.includes("password")) {
		errorMessage = { error, field: "email" };
	}

	if (checkError?.includes("password") && checkError?.includes("match")) {
		errorMessage = { error, field: "passwordCheck" };
	}

	if (checkError?.includes("username")) {
		errorMessage = { error, field: "username" };
	}

	if (checkError?.includes("email") && checkError?.includes("password")) {
		errorMessage = { error, field: "" };
	}

	return errorMessage;
};

type onChangeHandlerParams = {
    event: ChangeEvent<HTMLInputElement>;
    setIsSubmitted: Dispatch<SetStateAction<boolean>>
	setFormValidation: Dispatch<SetStateAction<formValidationStateData>>;
}

const onChangeHandler = ({ event, setIsSubmitted, setFormValidation }: onChangeHandlerParams) => {
    setIsSubmitted(false)
    onInputChange({ event, setFormValidation })
}

export { formValidationState, isError, onInputChange, onSubmitErrors, onChangeHandler };
