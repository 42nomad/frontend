import Swal from "sweetalert2";

const swalAlert = (text: string) => Swal.fire({
    'text': text,
    'heightAuto': false,
    'confirmButtonColor': '#20633F',
    'confirmButtonText': '확인',
});

export default swalAlert;