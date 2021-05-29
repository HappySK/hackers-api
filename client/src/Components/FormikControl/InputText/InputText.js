import { FormControl, TextField } from "@material-ui/core";
import React from "react";
import { Field, ErrorMessage } from "formik";

import styles from "./inputtext.module.css";
import { TextError } from "../TextError";

export const InputText = ({ name, label, ...rest }) => {
	return (
		<div className={styles.formcontrol}>
			<Field name={name}>
				{
					({ field }) => (
						<FormControl>
							<TextField variant="outlined" label={label} name={name} {...rest} {...field} size="small"/>
							<ErrorMessage component={TextError} name={name} />
						</FormControl>
					)
				}
			</Field>
		</div>
	);
};
