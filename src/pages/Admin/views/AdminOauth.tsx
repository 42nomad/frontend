import React from 'react';
import { useNavigate } from 'react-router-dom';
import swalAlert from '../../../utils/swalAlert';
import postAdminToken from '../../../services/postAdminToken';

function AdminOauth() {
	const nav = useNavigate();
	const code = new URL(window.location.href).searchParams.get('code');
	if (code)
		postAdminToken(code).then(() => {
			swalAlert('code 전송완료');
			nav('/Admin', { state: true });
		});
	else {
		swalAlert('code 전송실패');
		nav('/Admin', { state: true });
	}

	return <div>loading</div>;
}

export default AdminOauth;
