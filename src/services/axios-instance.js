import axios from "axios";

console.log('baseUrl is',import.meta.env.VITE_BACKEND_BASE_URL)

const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_BASE_URL
});

console.log('api',api)


api.interceptors.request.use((config)=> {
    const token = localStorage.getItem('authToken');

    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }

    return config;

});

export default api;