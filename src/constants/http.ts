import axios from 'axios';

const baseURL: string = import.meta.env.VITE_API_URL;

export const http = axios.create({
    baseURL,
    headers: {
        'Content-type': 'application/json',
    },
});

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

axios.interceptors.response.use(
    (response) => {
        if (response.status === 401) {
            // redirect to login page
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);
