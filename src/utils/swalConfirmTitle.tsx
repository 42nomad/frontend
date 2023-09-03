import Swal from "sweetalert2";

const swalConfirmTitle = (title: string, text: string, confrimText: string, cancelText: string, confirmColor: string) => Swal.fire({
    'title': `<p id="swalConfirmTitle">${title}</p>`,
    'html': `<p id="swalConfirmText">${text}<p>`,
    'showCancelButton': true,
    'confirmButtonText': confrimText,
    'cancelButtonText': cancelText,
    'confirmButtonColor': confirmColor,
    'cancelButtonColor': '#20633F',
    'heightAuto': false
});

export default swalConfirmTitle;