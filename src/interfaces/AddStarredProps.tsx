import { AppDispatch } from '../store/store';
import SearchSeatData from './SearchSeatData';

interface AddStarredProps {
	location: string;
	isStarred: boolean;
	setIsStarred: React.Dispatch<React.SetStateAction<boolean>>;
	dispatch: AppDispatch;
	info: SearchSeatData;
}

export default AddStarredProps;
