import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import users from "../models/users.js";
import { JWT_SECRET } from '../config/index.js' 

export const validateemail = async (req, res) => {
	const { email } = req.body;
	const user = await users.findOne({ email });
	if (user) return res.status(200).json({ message: "email exists" });
	else return res.status(200).json({ message: "email doesnot exist" });
};

export const validatesignup = async (req, res) => {
	const { email } = req.body;
	const user = await users.findOne({ email });
	if (user)
		return res
			.status(400)
			.json({ message: "User Already exists.Kindly Signin" });
	return res.status(200).json({ message: "User is ready to sign up" });
};

export const signin = async (req, res) => {
	const { email, password } = req.body;
	const user = await users.findOne({ email });
	if (user && (await bcrypt.compare(password, user.hashpassword))) {
		const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "1h" });
		return res
			.status(200)
			.json({ message: "credentials verified", user: user, token : token });
	}
	return res.status(200).json({ message: "invalid password" });
};

export const signup = async (req, res) => {
	const { firstname, lastname, email, mobileno, password } = req.body;
	const name = `${firstname} ${lastname}`;
	const hashpassword = await bcrypt.hash(password, 2);
	const user = await new users({
		name,
		email,
		mobileno,
		hashpassword,
	});
	await user.save();
	const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: "1h" });
	return res.status(200).json({ user, token });
};
