import axios from "axios";

export const API = axios.create({ baseURL: process.env.REACT_APP_BASE_URL });

export const signup = async (user) => await API.post("/user/signup", user);
export const signin = async (user) => await API.post("/user/signin", user);
