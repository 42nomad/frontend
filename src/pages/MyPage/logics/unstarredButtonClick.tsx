import deleteStarred from "../../../services/deleteStarred";
import swalConfirmTitle from "../../../utils/swalConfirmTitle";

const unstarredButtonClick = (id: number, location: string) => {
    swalConfirmTitle('즐겨찾기에서 삭제하시겠습니까?', '알림 설정한 자리를 삭제하면<br>알림도 함께 취소됩니다.', '삭제', '취소', '#B90E0A')
    .then((res) => {
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