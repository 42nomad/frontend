import { AxiosResponse } from "axios";
import Swal from "sweetalert2";

const errorHandler = (error: AxiosResponse) => {
    if (error.status === 500)
        Swal.fire({
            title: '<p id="swalConfirmTitle">서버에 문제가 발생했습니다.</p>',
            html: '<p id="swalConfirmText">슬랙으로 @hyunjcho에게 DM을 보내주세요.<p>',
            confirmButtonText: '확인',
            confirmButtonColor: '#20633F',
            heightAuto: false
        }).then((res) => {
            if (res.isConfirmed)
                window.location.href = '/';
        });
    else if (error.status === 429)
        Swal.fire({
            title: '<p id="swalConfirmTitle">요청이 너무 많습니다.</p>',
            html: '<p id="swalConfirmText">잠시 후 다시 시도해주세요.<p>',
            confirmButtonText: '확인',
            confirmButtonColor: '#20633F',
            heightAuto: false
        });
}

export default errorHandler;