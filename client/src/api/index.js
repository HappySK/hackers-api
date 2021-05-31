import axios from "axios";

export const API = axios.create({ baseURL: "https://ancient-gorge-85187.herokuapp.com" });

export const signup = async (user) => await API.post("/user/signup", user);
export const signin = async (user) => await API.post("/user/signin", user);
