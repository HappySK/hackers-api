import express from "express";
import path from "path";
import cors from 'cors'

import { PORT } from "./config/index.js";
import "./db/index.js";
import usersrouter from "./routes/users.js";

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : false }))

app.use("/user", usersrouter);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve("client", "build", "index.html"));
	});
}

app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`Server running on ${PORT}`);
});
