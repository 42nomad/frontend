import { AxiosResponse } from "axios";
import swalAlertTitle from "./swalAlertTitle";

const errorHandler = (error: AxiosResponse) => {
    if (error.status === 500)
        swalAlertTitle('서버에 문제가 발생했습니다.', '슬랙으로 @hyunjcho에게<br>DM을 보내주세요.', '확인', '#20633F')
        .then((res) => {
            if (res.isConfirmed)
                window.location.href = '/';
        });
    else if (error.status === 429)
        swalAlertTitle('요청이 너무 많습니다.', '잠시 후 다시 시도해주세요.', '확인', '#20633F')
}

export default errorHandler;