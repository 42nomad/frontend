import { AxiosResponse } from "axios";

const errorHandler = (error: AxiosResponse) => {
    if (error.status === 500)
        console.log('서버 문제');
}

export default errorHandler;