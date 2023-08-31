import axios, { AxiosResponse } from "axios";
// import errorHandler from "./errorHandler";

const nomadAxiosSetToken = (res: AxiosResponse) => {
    if (res.headers && res.headers.authorization) {
        const accessToken = res.headers.authorization;
        localStorage.setItem('token', accessToken);
    }
} // 진행 중

const nomadAxios = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

nomadAxios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('token') || '';
    const tokenConfig = config;
    tokenConfig.headers.Authorization = `Bearer ${accessToken}`;
    return tokenConfig;
})

nomadAxios.interceptors.response.use((response) => {
    nomadAxiosSetToken(response);
    return (response);
}, (error) => {
    if (error.response)
        nomadAxiosSetToken(error.response);
    // errorHandler(error.response);
    return Promise.reject(error);
});

export default nomadAxios;