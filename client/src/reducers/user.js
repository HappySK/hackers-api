export const userreducer = (oldUser = {}, { type, payload }) => {
	switch (type) {
		case "SIGN_UP":
			localStorage.setItem("email", payload.user.email);
			localStorage.setItem("token", payload.token);
			return { ...oldUser, ...payload.user };
		case "SIGN_IN":
			localStorage.setItem("email", payload.user.email);
			localStorage.setItem("token", payload.token);
			return { ...oldUser, ...payload.user };
		default:
			return {};
	}
};
