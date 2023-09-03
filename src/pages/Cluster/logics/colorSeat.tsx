import Swal from "sweetalert2";

const seatClick = (seat: string, state: number, nameOrTime: string) => {
    Swal.fire({
        title: seat,
        text: state === 1 ? `${nameOrTime}님이 사용 중입니다.`: `${nameOrTime}분 전에 로그아웃한 좌석입니다.`,
        showClass: {popup: ''},
        hideClass: {popup: ''},
        heightAuto: false,
        confirmButtonColor: '#20633F',
        confirmButtonText: '확인'
    });
}

const colorSeat = (seat: string, state: number, nameOrTime: string) => {
    const seatRect = document.querySelector(`rect#${seat}`) as SVGRectElement;
    const seatImg = document.querySelector(`image#${seat}`) as SVGImageElement;
    if (seatRect && seatImg) {
        seatRect.setAttribute('fill', `${state === 1 ? '#20633F' : '#20633f7d'}`);
        seatImg.style.cursor = 'pointer';
        seatImg.addEventListener('click', () => {
            seatClick(seat, state, nameOrTime);
        });
    }
}

export default colorSeat;