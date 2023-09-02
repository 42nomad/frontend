import { NavigateFunction } from "react-router-dom";
import LostFormParams from "../../../interfaces/LostFormParams";
import editRegist from "./editRegist";
import newRegist from "./newRegist";

const registButtonClick = (params: LostFormParams, setState: React.Dispatch<React.SetStateAction<number>>, nav: NavigateFunction) => {
    if (params.state === 0)
        newRegist(params, nav);
    else if (params.state === 2)
        editRegist(params, setState, nav);
}

export default registButtonClick;