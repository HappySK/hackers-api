import express from "express";
import path from "path";

import { PORT } from "./config/index.js";
import "./db/index.js";

const app = express();

if (process.env.NODE_ENV === "production") {
	app.use(express.static('client/build'));
   app.get('*', (req, res) => {
      res.sendFile(path.resolve("client", "build", "index.html"))
   })
}

app.listen(PORT, (err) => {
	if (err) throw err;
	console.log(`Server running on ${PORT}`);
});
