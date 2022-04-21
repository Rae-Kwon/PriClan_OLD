type UserActionData = {
	formError?: string;
	fieldErrors?: {
		username: string | undefined;
		password: string | undefined;
	};
	fields?: {
		username: string;
		password: string;
	};
};

type ClanActionData = {
	formError?: string;
	fieldErrors?: {
		clanName: string | undefined;
		members: FormDataEntryValue[] | undefined;
	};
	fields?: {
		clanName: string;
		members: FormDataEntryValue[];
	};
};

export type { UserActionData, ClanActionData };
