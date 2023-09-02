import postAdminRole from '../../../services/postAdminRole';
import swalAlert from '../../../utils/swalAlert';

const handleUserRole = (user: string, role: number) => {
	if (user === '') swalAlert('user is empty');
	else
		postAdminRole(user, role).then(() => {
			swalAlert('user role change');
		});
};

export default handleUserRole;
