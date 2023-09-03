import { useEffect } from 'react';
import getAdminRole from '../../../services/getAdminRole';
import swalAlertTitle from '../../../utils/swalAlertTitle';

function useCheckRole(domain: string, accessId: number) {
	document.title = `42nomad ${domain}`;
	useEffect(() => {
		getAdminRole().then((res) => {
			if (res.data !== accessId)
				swalAlertTitle('페이지 접근 권한이 없습니다.', '이전 페이지로 이동합니다.', '확인', '#20633F').then(
					(response) => {
						if (response.isConfirmed) window.location.href = '/';
					},
				);
		});
	}, [accessId]);
}

export default useCheckRole;
