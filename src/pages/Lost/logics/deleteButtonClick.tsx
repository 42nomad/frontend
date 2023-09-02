import { NavigateFunction } from "react-router-dom";
import Swal from "sweetalert2";
import swalAlert from "../../../utils/swalAlert";
import deleteLost from "../../../services/deleteLost";
import deleteS3 from "./deleteS3";

const deleteAndHandle = (postId: number, isMyPage: boolean, nav: NavigateFunction) => {
    deleteLost(postId)
    .then(() => {
        if (isMyPage) {
            const doc = document.getElementById(`doc-${postId}`) as HTMLDivElement;
            if (doc)
                doc.style.display = 'none';
        } else {
            swalAlert('삭제되었습니다.')
            .then((response) => {
                if (response.isConfirmed)
                    nav('/lost');
            });
        }
    });
}

const deleteButtonClick = (postId: number, imgKey: string, isMyPage: boolean, nav: NavigateFunction) => {
    Swal.fire({
        html: '<p id="swalConfirmLine">글을 삭제하시겠습니까?</p>',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소',
        confirmButtonColor: '#B90E0A',
        cancelButtonColor: '#20633F',
        heightAuto: false
    }).then((res) => {
        if (res.isConfirmed && imgKey !== 'default-img.png') {
            deleteS3(imgKey)
            .then(() => deleteAndHandle(postId, isMyPage, nav))
            .catch(() => swalAlert('이미지 삭제 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'))
        } else if (res.isConfirmed)
            deleteAndHandle(postId, isMyPage, nav);
    })
}

export default deleteButtonClick;