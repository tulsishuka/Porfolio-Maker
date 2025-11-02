import axios from "axios";



export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "https://porfolio-maker-2.onrender.com/portfolios",
  // add render url here
  timeout: 10000
});

