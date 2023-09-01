import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { setHome } from "../../../store/homeReducer";
import swalAlert from "../../../utils/swalAlert";
import postHome from "../../../services/postHome";

const saveButtonClick = (home: number, dispatch: Dispatch<AnyAction>) => {
	postHome(home)
	.then(() => {
		dispatch(setHome(home));
		swalAlert('변경되었습니다.');
	})
}

export default saveButtonClick;