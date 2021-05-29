import {
	AppBar,
	Box,
	Paper,
	Tab,
	Tabs
} from "@material-ui/core";
import React, { useState } from "react";

import { AdminForm } from "../Admin/AdminForm";
import { SignIn } from "../User/SignIn/SignIn";
import { SignUp } from "../User/SignUp/SignUp";
import styles from "./landingpage.module.css";

export const LandingPage = () => {
	const TabPanel = ({ value, index, children, ...rest }) => {
		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`simple-tabpanel-${index}`}
				aria-labelledby={`simple-tab-${index}`}
				{...rest}
			>
				{value === index && (
					<Box padding={3}>
						{children}
					</Box>
				)}
			</div>
		);
	};

	const [value, setValue] = useState(0);

	const handleChange = (e, newValue) => {
		setValue(newValue);
	};

	const allyprops = (index) => {
		return {
			id: `simple-tab-${index}`,
			"aria-controls": `simple-tabpanel-${index}`,
		};
	};

	return (
		<div>
			<Paper elevation={3} className={styles.paper}>
				<AppBar position="sticky">
					<Tabs value={value} onChange={handleChange}>
						<Tab label="Admin" {...allyprops(0)} />
						<Tab label="User Signin" {...allyprops(1)} />
						<Tab label="User Signup" {...allyprops(2)} />
					</Tabs>
				</AppBar>
				<TabPanel value={value} index={0}>
					<AdminForm />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<SignIn />
				</TabPanel>
				<TabPanel value={value} index={2}>
					<SignUp />
				</TabPanel>
			</Paper>
		</div>
	);
};
