import swalAlert from '../../../utils/swalAlert';
import getSearchSeatData from '../../../services/getSearchSeatData';
import SearchButtonProps from '../../../interfaces/SearchButtonProps';

const handleSearchClick = ({ location, setInfo, setIsStarred }: SearchButtonProps) => {
	getSearchSeatData(location)
		.then((res) => {
			setInfo(res.data);
			setIsStarred(res.data.isStarred);
		})
		.catch((err) => {
			if (err.response.status === 404) swalAlert('존재하지 않는 좌석입니다');
		});
};

export default handleSearchClick;
