import deleteMember from '../../../services/deleteMember';
import swalAlert from '../../../utils/swalAlert';

const handleMemberDelete = (member: string) => {
	if (member === '') swalAlert('member is empty');
	else
		deleteMember(member)
			.then(() => {
				swalAlert('member delete');
			})
			.catch((err) => {
				if (err.response.status === 404) swalAlert('존재하지 않는 유저입니다. 입력값을 확인해주세요');
			});
};

export default handleMemberDelete;
