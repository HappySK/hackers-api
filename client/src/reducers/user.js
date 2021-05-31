export const userreducer = (
	oldUser = {},
	{ type, payload }
) => {
	switch (type) {
		case "SIGN_UP":
			return { ...oldUser, ...payload.user };
		case "SIGN_IN":
			return { ...oldUser, ...payload.user };
		default:
			return {};
	}
};
