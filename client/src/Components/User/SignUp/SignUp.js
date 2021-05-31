import React from "react";
import { Form, Formik } from "formik";
import { Box, Button } from "@material-ui/core";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import axios from "axios";

import { FormikControl } from "../../FormikControl/FormikControl";
import { signupaction } from "../../../actions/user";

export const SignUp = () => {
	const dispatch = useDispatch();

	const initialValues = {
		firstname: "",
		lastname: "",
		email: "",
		password: "",
		confirmpassword: "",
	};

	const validationSchema = Yup.object({
		firstname: Yup.string().required("First Name is required"),
		lastname: Yup.string().required("Last Name is required"),
		email: Yup.string()
			.email()
			.test("Password Check", "Email Already Exists", async (email) => {
				const {
					data: { message },
				} = await axios.post("/user/validateemail", { email });
				return message !== "email exists";
			})
			.required("Email is required"),
		password: Yup.string().required("Password is required"),
		confirmpassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Password must match")
			.required("Provide confirm password"),
	});

	const onSubmit = (values, actions) => {
		console.log("Sign Up Data", values);
		dispatch(signupaction(values));
		console.log("User added");
		actions.resetForm();
	};

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => (
					<Form>
						<FormikControl
							control="input"
							name="firstname"
							label="First Name"
							autoFocus={true}
						/>
						<FormikControl control="input" name="lastname" label="Last Name" />
						<FormikControl
							type="email"
							control="input"
							name="email"
							label="Email"
						/>
						<FormikControl
							type="password"
							control="input"
							name="password"
							label="Password"
						/>
						<FormikControl
							type="password"
							control="input"
							name="confirmpassword"
							label="Confirm Password"
							value=""
						/>
						<Box>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								disabled={!formik.isValid}
							>
								Submit
							</Button>
							<Button
								type="reset"
								variant="contained"
								color="secondary"
								onClick={() => formik.resetForm()}
							>
								Reset
							</Button>
						</Box>
					</Form>
				)}
			</Formik>
		</div>
	);
};
