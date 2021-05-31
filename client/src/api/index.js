import axios from "axios";

export const API = axios.create({ baseURL: "http://localhost:5000" });

export const signup = async (user) => await API.post("/user/signup", user);
export const signin = async (user) => await API.post("/user/signin", user);
