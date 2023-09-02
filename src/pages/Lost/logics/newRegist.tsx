import { NavigateFunction } from "react-router-dom";
import Swal from "sweetalert2";
import LostFormParams from "../../../interfaces/LostFormParams";
import swalAlert from "../../../utils/swalAlert";
import postLost from "../../../services/postLost";
import inputCheck from "./inputCheck";
import uploadS3 from "./uploadS3";

const newRegist = (params: LostFormParams, nav: NavigateFunction) => {
    const { title, descript, writer } = params;
    const file = document.getElementById('file') as HTMLInputElement;

    if (inputCheck(title, descript)) {
        Swal.fire({
            text: '글을 등록하시겠습니까?',
            showCancelButton: true,
            confirmButtonText: '등록',
            cancelButtonText: '취소',
            confirmButtonColor: '#20633F',
            cancelButtonColor: '#767676',
            heightAuto: false
        }).then((res) => {
            if (res.isConfirmed) {
                if (!file.files || !file.files[0])
                    postLost(title, descript, 'default-img.png').then(() => nav('/lost'));
                else {
                    const newKey = `${Date.now()}_${writer}`;
                    uploadS3(newKey, file.files[0])
                    .then(() => postLost(title, descript, newKey).then(() => nav('/lost')))
                    .catch(() => swalAlert('이미지 업로드 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'));
                }
            }
        });
    }
}

export default newRegist;