import postSecretKey from '../../../services/postSecretKey';
import swalAlert from '../../../utils/swalAlert';

const handleSecretUpdate = (secret: string) => {
	if (secret === '') swalAlert('secret is empty');
	else
		postSecretKey(secret).then(() => {
			swalAlert('secret update');
		});
};

export default handleSecretUpdate;
