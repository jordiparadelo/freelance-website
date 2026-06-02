export interface ContactLeadPayload {
	data: {
		name: string;
		email: string;
		message: string;
	};
}

export interface ContactLeadRequestBody extends ContactLeadPayload {}

export interface ContactLeadResponse {
	ok: boolean;
	message: string;
}
