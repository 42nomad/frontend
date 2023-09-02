import { NavigateFunction } from "react-router-dom";
import Swal from "sweetalert2";
import LostFormParams from "../../../interfaces/LostFormParams";
import patchLost from "../../../services/patchLost";
import swalAlert from "../../../utils/swalAlert";
import inputCheck from "./inputCheck";
import uploadS3 from "./uploadS3";

const patchAndHandle = (params: LostFormParams, setState: React.Dispatch<React.SetStateAction<number>>, nav: NavigateFunction) => {
    const { postId, title, descript, imgKey } = params;
    
    patchLost(postId, title, descript, imgKey)
    .then(() => setState(1))
    .catch((err) => {
        if (err.response.status === 404) {
            swalAlert('존재하지 않는 게시물입니다.').then((res) => {
                if (res.isConfirmed)
                    nav('/lost');
            });
        }
    });
}

const editRegist = (params: LostFormParams, setState: React.Dispatch<React.SetStateAction<number>>, nav: NavigateFunction) => {
    const { title, descript, writer, imgKey } = params;
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
                if (file.files && file.files[0]) {
                    const newKey = (imgKey === 'default-img.png') ? `${Date.now()}_${writer}` : imgKey;
                    const newParams = {...params, imgKey: newKey};
                    uploadS3(newKey, file.files[0])
                    .then(() => patchAndHandle(newParams, setState, nav))
                    .catch(() => swalAlert('이미지 업로드 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'));
                } else
                    patchAndHandle(params, setState, nav);
            }
        })
    }
}

export default editRegist;