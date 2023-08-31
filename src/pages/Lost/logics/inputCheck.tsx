import swalAlert from "../../../utils/swalAlert";

const inputCheck = (title: string, descript: string) => {
    if (title === '')
        swalAlert('습득 위치를 입력해주세요.');
    else if (descript === '')
        swalAlert('보관 위치를 입력해주세요.');
    else
        return (1);
    return (0);
}

export default inputCheck;