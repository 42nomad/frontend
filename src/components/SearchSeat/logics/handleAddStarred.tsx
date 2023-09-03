import { addStarred } from '../../../store/starredReducer';
import postStarred from '../../../services/postStarred';
import swalAlert from '../../../utils/swalAlert';
import AddStarredProps from '../../../interfaces/AddStarredProps';

const handleAddStarred = ({ location, isStarred, setIsStarred, dispatch, info }: AddStarredProps) => {
	if (isStarred) return;

	postStarred(location)
		.then((res) => {
			setIsStarred(true);
			dispatch(addStarred({ ...info, isNoti: false, notificationId: 0, starredId: res.data }));
		})
		.catch(({ response }) => {
			if (response.status === 404) swalAlert('존재하지 않는 좌석입니다');
			else if (response.status === 409) swalAlert('이미 즐겨찾기에 추가된 좌석입니다');
		});
};

export default handleAddStarred;
