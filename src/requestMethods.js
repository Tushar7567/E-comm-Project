import axios from "axios";

const BASE_URL = "https://e-comm-backend-meks.onrender.com/api";


const user = JSON.parse(localStorage.getItem("userToken")) ? JSON.parse(localStorage.getItem("userToken")) : [0,{accessToken: 1}] ;
const TOKEN = user[1]?.accessToken;
// console.log(TOKEN)



export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
