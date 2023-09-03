import getAdminLoginUrl from '../../../services/getAdminLoginUrl';

const handleAmdinToken = () => {
	getAdminLoginUrl().then((res) => {
		window.location.href = res.data;
	});
};

export default handleAmdinToken;
