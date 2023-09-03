import Swal from 'sweetalert2';
import swalAlert from './swalAlert';
import deleteNotification from '../services/deleteNotification';
import updateNotificationId from './updateNotificationId';
import NotificationProps from '../interfaces/NotificationProps';

const setNotification = ({
	isNoti,
	setIsNoti,
	notificationId,
	setNotificationId,
	postNotification,
	location,
	seat,
	dispatch,
	isDispatch,
}: NotificationProps) => {
	if (isNoti) {
		deleteNotification(notificationId);
		updateNotificationId(dispatch, seat, 0, setNotificationId, isDispatch);
	} else {
		postNotification(location)
			.then((res) => {
				updateNotificationId(dispatch, seat, res.data as number, setNotificationId, isDispatch);
			})
			.catch(({ response }) => {
				if (response.status === 409) {
					swalAlert('이미 알림등록된 자리입니다');
				} else if (response.status === 404) {
					if (response.data.responseMsg === '슬랙 가입 정보 없음') {
						Swal.fire({
							title: "<div style='font-size:30px'>슬랙 가입을 위해 <br>42intra에 연결된 이메일을 확인해주세요.</div>",
							heightAuto: false,
							confirmButtonColor: '#20633F',
							confirmButtonText: '확인',
						});
						updateNotificationId(dispatch, seat, response.data.responseData, setNotificationId, isDispatch);
					} else swalAlert('존재하지 않는 자리입니다');
				}
			});
	}
	setIsNoti(!isNoti);
};

export default setNotification;
