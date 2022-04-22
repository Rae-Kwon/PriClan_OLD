type UserActionData = {
	formError?: string;
	fieldErrors?: {
		username: string | undefined;
	};
	fields?: {
		username: string;
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
