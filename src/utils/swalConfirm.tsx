import Swal from "sweetalert2";

const swalConfirm = (text: string, confrimText: string, cancelText: string, confirmColor: string) => Swal.fire({
    'html': `<p id="swalOneLine">${text}</p>`,
    'showCancelButton': true,
    'confirmButtonText': confrimText,
    'cancelButtonText': cancelText,
    'confirmButtonColor': confirmColor,
    'cancelButtonColor': '#767676',
    'heightAuto': false
});

export default swalConfirm;