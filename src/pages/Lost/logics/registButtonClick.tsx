import { NavigateFunction } from "react-router-dom";
import Swal from "sweetalert2";
import LostFormParams from "../../../interfaces/LostFormParams";
import editRegist from "./editRegist";
import newRegist from "./newRegist";

const registButtonClick = (params: LostFormParams, setState: React.Dispatch<React.SetStateAction<number>>, nav: NavigateFunction) => {
    Swal.fire({
        text: '글을 등록하시겠습니까?',
        showCancelButton: true,
        confirmButtonText: '등록',
        cancelButtonText: '취소',
        confirmButtonColor: '#20633F',
        cancelButtonColor: '#767676',
        heightAuto: false
    }).then((res) => {
        if (res.isConfirmed) {
            if (params.state === 0)
                newRegist(params, nav);
            else if (params.state === 2)
                editRegist(params, setState, nav);
        }
    })

}

export default registButtonClick;