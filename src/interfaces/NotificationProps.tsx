import { AxiosResponse } from 'axios';
import StarredData from './StarredData';
import { AppDispatch } from '../store/store';

interface NotificationProps {
	isNoti: boolean;
	setIsNoti: React.Dispatch<React.SetStateAction<boolean>>;
	notificationId: number;
	setNotificationId: React.Dispatch<React.SetStateAction<number>>;
	postNotification: (location: string) => Promise<AxiosResponse<unknown, unknown>>;
	location: string;
	seat: StarredData | null;
	dispatch: AppDispatch | null;
	isDispatch: boolean;
}

export default NotificationProps;
