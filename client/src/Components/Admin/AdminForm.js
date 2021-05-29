import { Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";

import styles from "./adminform.module.css";
import { FormikControl } from "../FormikControl/FormikControl";
import { Box, Button } from "@material-ui/core";

export const AdminForm = () => {
	const initialValues = {
		adminname: "",
		adminpassword: "",
	};

	const onSubmit = (values) => {
		console.log("Admin Data", values);
	};

	const validationSchema = Yup.object({
		adminname: Yup.string().required("Admin ID is required"),
		adminpassword: Yup.string().required("Admin Password is required"),
	});

	return (
		<Formik
			className={styles.formik}
			initialValues={initialValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
		>
			{(formik) => {
				return (
					<Form>
						<FormikControl
							control="input"
							name="adminname"
							label="Enter Admin ID"
							autoFocus={true}
						/>
						<FormikControl
							control="input"
							type="password"
							name="adminpassword"
							label="Enter Admin Password"
						/>
						<Box>
							<Button
								type="submit"
								size="small"
								variant="contained"
								color="primary"
								disabled={!formik.isValid}
							>
								Submit
							</Button>
							<Button
								type="reset"
								size="small"
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
	);
};
