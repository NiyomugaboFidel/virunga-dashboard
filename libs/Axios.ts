import axios from "axios";



const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // Replace with your API URL
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token') || sessionStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
