import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { FormikControl } from "../../FormikControl/FormikControl";
import { Box, Button } from "@material-ui/core";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../../../actions/user";

export const SignIn = ({ history }) => {
	const dispatch = useDispatch();
	const state = useSelector(state => state.userreducer)

	const initialValues = {
		email: "",
		password: "",
	};

	const validationSchema = Yup.object({
		email: Yup.string()
			.email("Invalid Email Format")
			.required("Email Id is required")
			.test("check email existence", "Email Does not exist", async (email) => {
				const {
					data: { message },
				} = await axios.post("/user/validateemail", { email });
				return message === "email exists";
			}),
		password: Yup.string().required("Password is required"),
	});

	const onSubmit = async (values, actions) => {
		await dispatch(signInAction(values,actions));
	};

	return (
		<div>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={onSubmit}
			>
				{(formik) => {
					return (
						<Form>
							<FormikControl
								control="input"
								name="email"
								label="Email Id"
								autoFocus={true}
							/>
							<FormikControl
								type="password"
								control="input"
								name="password"
								label="Password"
							/>
							<Box padding="3">
								<Button
									type="submit"
									variant="contained"
									color="primary"
									disabled={formik.isSubmitting}
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
					);
				}}
			</Formik>
		</div>
	);
};
