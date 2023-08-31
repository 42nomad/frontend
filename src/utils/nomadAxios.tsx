import axios, { AxiosResponse } from "axios";
// import errorHandler from "./errorHandler";

const nomadAxiosSetToken = (res: AxiosResponse) => {
    if (res.headers.Autorization) {
        const accessToken = res.headers.Authorization || '';
        localStorage.setItem('token', accessToken);
    }
    // console.log(res);
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
    nomadAxiosSetToken(error.config);
    // errorHandler(error.response);
    return Promise.reject(error);
});

export default nomadAxios;