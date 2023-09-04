import getAdminLoginUrl from '../../../services/getAdminLoginUrl';

const handleAmdinLogin = () => {
	getAdminLoginUrl().then((res) => {
		window.location.href = res.data;
	});
};

export default handleAmdinLogin;
