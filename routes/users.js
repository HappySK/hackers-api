import express from "express";
import { signin, signup, validateemail } from "../controllers/users.js";

const usersrouter = express.Router();

usersrouter.post("/signin", signin);
usersrouter.post("/signup", signup);
usersrouter.post('/validateemail',validateemail)

export default usersrouter;
