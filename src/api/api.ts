const $api = 0

/*
import axios from "axios";
import {SERVER_URL} from "../const/const";
import AuthStore from "../bll/auth-store";


const $api = axios.create({
    withCredentials: true,
    baseURL: SERVER_URL + '/api'
});

$api.interceptors.request.use((config) => {
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
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('Не авторизованный пользователь')
            return AuthStore.logout()
        }
    }
    throw error;
})
*/
export default $api;


