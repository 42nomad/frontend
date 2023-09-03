import StarredData from '../interfaces/StarredData';
import { updateStarred } from '../store/starredReducer';
import { AppDispatch } from '../store/store';

function updateNotificationId(
	dispatch: AppDispatch | null,
	seat: StarredData | null,
	id: number,
	setNotificationId: React.Dispatch<React.SetStateAction<number>>,
	isDispatch: boolean,
) {
	setNotificationId(id);
	if (isDispatch && dispatch) {
		if (id === 0) dispatch(updateStarred({ ...seat, isNoti: true, notificationId: id }));
		else dispatch(updateStarred({ ...seat, isNoti: false, notificationId: id }));
	}
}

export default updateNotificationId;
