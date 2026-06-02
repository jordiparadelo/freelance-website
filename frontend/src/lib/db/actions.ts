export const createLead = async (formData: FormData) => {
	"use server";

	const data = {
		name: formData.get("name"),
		email: formData.get("email"),
		message: formData.get("message"),
	};
	console.log({ data });
};
