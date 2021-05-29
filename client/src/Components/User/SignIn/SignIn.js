import React from "react";
import { Formik, Form } from "formik";
import * as Yup from 'yup'

import { FormikControl } from "../../FormikControl/FormikControl";
import { Box, Button } from "@material-ui/core";

export const SignIn = () => {
   const initialValues = {
      emailid : '',
      password : ''
   }

   const validationSchema = Yup.object({
      emailid : Yup.string().email("Invalid Email Format").required('Email Id is required'),
      password : Yup.string().required('Password is required')
   })

   const onSubmit = values => {
      console.log('User Login Data',values)
   }
   
	return (
		<div>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
				{(formik) => (
					<Form>
						<FormikControl
							control="input"
							name="emailid"
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
							<Button type="submit" variant="contained" color="primary" disabled={!formik.isValid}>
								Submit
							</Button>
							<Button type="reset" variant="contained" color="secondary" onClick={() => formik.resetForm()}>
								Reset
							</Button>
						</Box>
					</Form>
				)}
			</Formik>
		</div>
	);
};
