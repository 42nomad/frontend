import { NavigateFunction } from "react-router-dom";
import LostFormParams from "../../../interfaces/LostFormParams";
import swalAlert from "../../../utils/swalAlert";
import postLost from "../../../services/postLost";
import inputCheck from "./inputCheck";
import uploadS3 from "./uploadS3";

const newRegist = (params: LostFormParams, nav: NavigateFunction) => {
    const { title, descript, writer } = params;
    const file = document.getElementById('file') as HTMLInputElement;

    if (!file.files || !file.files[0])
        swalAlert('사진을 등록해주세요.');
    else if (inputCheck(title, descript)) {
        const newKey = `${Date.now()}_${writer}`;
        uploadS3(newKey, file.files[0])
        .then(() => postLost(title, descript, newKey).then(() => nav('/lost')))
        .catch(() => swalAlert('이미지 업로드 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'));
    }
}

export default newRegist;