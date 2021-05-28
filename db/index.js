import mongoose from "mongoose";

import { DB_URL } from "../config/index.js";

mongoose.connect(DB_URL,{ useNewUrlParser : true, useUnifiedTopology : true }, (err) => {
	if (err) throw err;
	console.log(`Database Connected`);
});
