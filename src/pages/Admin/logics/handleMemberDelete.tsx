import deleteMember from '../../../services/deleteMember';
import swalAlert from '../../../utils/swalAlert';

const handleMemberDelete = (member: string) => {
	if (member === '') swalAlert('member is empty');
	else
		deleteMember(member).then(() => {
			swalAlert('member delete');
		});
};

export default handleMemberDelete;
