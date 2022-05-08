import axios from "axios";
import {SERVER_URL} from "../const/const";
import AuthStore from "../auth/auth-store";

const $api = axios.create({
    withCredentials: true,
    baseURL: SERVER_URL + '/api'
});


$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${SERVER_URL}/api/refresh`, {withCredentials: true});
            localStorage.setItem('token',response.data.token);
            return $api.request(originalRequest);
        } catch (e) {
            return AuthStore.Logout()
        }
    }
    throw error;
})
export default $api;


