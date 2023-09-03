import Swal from "sweetalert2";

const swalAlertTitle = (title: string, text: string, confrimText: string, confirmColor: string) => Swal.fire({
    'title': `<p id="swalConfirmTitle">${title}</p>`,
    'html': `<p id="swalConfirmText">${text}<p>`,
    'confirmButtonText': confrimText,
    'confirmButtonColor': confirmColor,
    'heightAuto': false
});

export default swalAlertTitle;