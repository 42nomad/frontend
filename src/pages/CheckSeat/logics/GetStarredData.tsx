import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import getStarred from '../../../services/getStarred';
import { setStarred } from '../../../store/starredReducer';
import { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../store/hooks';

function GetStarredData() {
	const starredInfo = useSelector((state: RootState) => state.starred.starredInfo);
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchData = async () => {
			if (starredInfo && starredInfo.length === 0) {
				const res = await getStarred();
				dispatch(setStarred(res.data));
			}
		};
		fetchData();
	}, [starredInfo, dispatch]);
	return starredInfo;
}

export default GetStarredData;
