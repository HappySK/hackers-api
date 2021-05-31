export const userreducer = (user = {}, action) => {
	switch (action.type) {
		case "SIGN_UP":
			return { ...user, ...action.payload };
		case "SIGN_IN":
			return { ...user, ...action.payload };
		default:
			return {};
	}
};
