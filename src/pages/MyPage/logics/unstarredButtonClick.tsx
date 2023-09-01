import Swal from "sweetalert2";
import deleteStarred from "../../../services/deleteStarred";

const unstarredButtonClick = (id: number, location: string) => {
    Swal.fire({
        title: '<p id="swalConfirmTitle">즐겨찾기에서 삭제하시겠습니까?</p>',
        html: '<p id="swalConfirmText">알림 설정한 자리 삭제 시 알림도 함께 취소됩니다.<p>',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소',
        confirmButtonColor: '#B90E0A',
        cancelButtonColor: '#20633F',
        heightAuto: false
    }).then((res) => {
        if (res.isConfirmed) {
            deleteStarred(id)
            .then(() => {
                const line = document.getElementById(`${location}`) as HTMLDivElement;
                if (line)
                    line.style.display = 'none';
            })
        }
    });
}

export default unstarredButtonClick;