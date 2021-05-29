import React from "react";
import { InputText } from "./InputText/InputText";

export const FormikControl = ({ control, ...rest }) => {
	switch (control) {
		case "input":
			return <InputText {...rest} />;
		default:
			return null;
	}
};
