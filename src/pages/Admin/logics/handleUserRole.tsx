import postAdminRole from '../../../services/postAdminRole';
import swalAlert from '../../../utils/swalAlert';

const handleUserRole = (user: string, role: number) => {
	if (user === '') swalAlert('user is empty');
	else
		postAdminRole(user, role)
			.then(() => {
				swalAlert('user role change');
			})
			.catch((err) => {
				if (err.response.status === 404) swalAlert('존재하지 않는 유저입니다. 입력값을 확인해주세요');
			});
};

export default handleUserRole;
