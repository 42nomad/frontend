import { AxiosResponse } from 'axios';
import StarredData from './StarredData';
import { AppDispatch } from '../store/store';
import StateHandler from './StateHandler';

interface NotificationProps {
	isNoti: StateHandler<boolean>;
	notificationId: StateHandler<number>;
	isLoading: StateHandler<boolean>;
	postNotification: (location: string) => Promise<AxiosResponse<unknown, unknown>>;
	location: string;
	seat: StarredData | null;
	dispatch: AppDispatch | null;
	isDispatch: boolean;
}

export default NotificationProps;
