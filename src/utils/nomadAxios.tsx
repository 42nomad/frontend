import axios, { AxiosResponse } from "axios";
// import errorHandler from "./errorHandler";

const nomadAxios = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

const nomadAxiosSetToken = (res: AxiosResponse) => {
    // if (res.headers.hasAuthorization) {
    //     const accessToken = res.headers.getAuthorization?.toString() || '';
    //     localStorage.setItem('token', accessToken);
    // }
    console.log(res);
}

nomadAxios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('token') || '';
    const tokenConfig = config;
    tokenConfig.headers.Authorization = `Bearer ${accessToken}`;
    return tokenConfig;
})

nomadAxios.interceptors.response.use((response) => {
    // if (response.headers.hasAuthorization) {
    //     const accessToken = response.headers.getAuthorization?.toString() || '';
    //     localStorage.setItem('token', accessToken);
    // }
    nomadAxiosSetToken(response);
    return (response);
}, (error) => {
    // if (error.headers.hasAuthorization) {
    //     const accessToken = error.headers.getAuthorization?.toString() || '';
    //     localStorage.setItem('token', accessToken);
    // }
    nomadAxiosSetToken(error.config);
    // errorHandler(error.response);
    // console.log(error);
    return (error);
});

export default nomadAxios;