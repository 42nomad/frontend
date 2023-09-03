import swalAlert from '../../../utils/swalAlert';
import postInCluster from '../../../services/postInCluster';
import StateHandler from '../../../interfaces/StateHandler';

const handleInCluster = ({ isLoading }: { isLoading: StateHandler<boolean> }) => {
	isLoading.setState(true);
	postInCluster()
		.then(() => {
			swalAlert('incluster update 완료');
			isLoading.setState(false);
		})
		.catch((err) => {
			if (err.response.status === 401) swalAlert('시크릿 업데이트 및 관리자 토큰 재발급 필요');
			isLoading.setState(false);
		});
};

export default handleInCluster;
