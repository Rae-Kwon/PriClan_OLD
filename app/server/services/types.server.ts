type UserAuth = {
	username: string;
	password: string;
};

type CreateUser = {
	id: string;
	username: string;
}

export type { UserAuth, CreateUser }