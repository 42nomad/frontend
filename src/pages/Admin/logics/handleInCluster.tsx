import swalAlert from '../../../utils/swalAlert';
import postInCluster from '../../../services/postInCluster';

const handleInCluster = () => {
	postInCluster().then(() => {
		swalAlert('incluster update finished');
	});
};

export default handleInCluster;
