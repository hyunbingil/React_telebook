import axios from "axios";

export const getNumber = () => axios.get("/api/counter/");
export const setNumber = number => axios.post("/api/counter/", { number });