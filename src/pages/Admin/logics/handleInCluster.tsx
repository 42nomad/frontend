import swalAlert from '../../../utils/swalAlert';
import postInCluster from '../../../services/postInCluster';

const handleInCluster = () => {
	postInCluster()
		.then(() => {
			swalAlert('incluster update 완료');
		})
		.catch((err) => {
			if (err.response.status === 401) swalAlert('시크릿 업데이트 및 관리자 토큰 재발급 필요');
		});
};

export default handleInCluster;
