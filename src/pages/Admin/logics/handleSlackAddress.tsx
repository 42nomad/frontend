import postSlackAddress from '../../../services/postSlackAddress';
import swalAlert from '../../../utils/swalAlert';

const handleSlackAddress = (slackAddress: string) => {
	if (slackAddress === '') swalAlert('slack address is empty');
	else
		postSlackAddress(slackAddress).then(() => {
			swalAlert('slack address change');
		});
};

export default handleSlackAddress;
