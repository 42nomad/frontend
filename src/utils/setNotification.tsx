import swalAlert from './swalAlert';
import deleteNotification from '../services/deleteNotification';
import updateNotificationId from './updateNotificationId';
import NotificationProps from '../interfaces/NotificationProps';

const setNotification = ({
	isNoti,
	notificationId,
	isLoading,
	postNotification,
	location,
	seat,
	dispatch,
	isDispatch,
}: NotificationProps) => {
	isLoading.setState(true);
	if (isNoti.state) {
		deleteNotification(notificationId.state);
		updateNotificationId(dispatch, seat, 0, notificationId.setState, isDispatch);
		isNoti.setState(false);
		isLoading.setState(false);
	} else {
		postNotification(location)
			.then((res) => {
				updateNotificationId(dispatch, seat, res.data as number, notificationId.setState, isDispatch);
				isNoti.setState(true);
				isLoading.setState(false);
			})
			.catch(({ response }) => {
				if (response.status === 409) {
					swalAlert('이미 알림등록된 자리입니다');
				} else if (response.status === 404) {
					if (response.data.responseMsg === '슬랙 가입 정보 없음') {
						swalAlert('슬랙 가입을 위해 <br>42intra에 연결된 이메일을 확인해주세요.');
						updateNotificationId(dispatch, seat, response.data.responseData, notificationId.setState, isDispatch);
						isNoti.setState(true);
					} else swalAlert('존재하지 않는 자리입니다');
				}
				isLoading.setState(false);
			});
	}
};

export default setNotification;
