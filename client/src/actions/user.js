import { signin, signup } from "../api";

export const signupaction = (user) => async (dispatch) => {
	try {
		const { data } = await signup(user);
		dispatch({ type: "SIGN_UP", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const signInAction = (userdata, actions) => async (dispatch) => {
	try {
		const { data } = await signin(userdata);
		if (data.message === "invalid password")
			actions.setFieldError("password", "Incorrect Password");
		else {
			console.log(data)
			dispatch({ type: "SIGN_IN", payload: data });
			actions.resetForm();
		}
	} catch (error) {
		console.log(error.message);
	}
};
