import React from "react";
import { Grid } from "@material-ui/core";

import { AdminForm, SignUp, SignIn } from "./Components";
import './App.css'

export const App = () => {
	return (
		<div>
			<Grid container className="center" alignItems="center">
				<Grid item lg={6}>
					<AdminForm />
				</Grid>
				<Grid item lg={6}>
					<Grid container>
						<Grid item lg={6}>
							<SignIn />
						</Grid>
						<Grid item lg={6}>
							<SignUp />
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
