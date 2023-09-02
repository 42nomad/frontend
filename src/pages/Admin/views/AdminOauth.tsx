import React from 'react';
import { useNavigate } from 'react-router-dom';
import nomadAxios from '../../../utils/nomadAxios';
import swalAlert from '../../../utils/swalAlert';

function AdminOauth() {
	const nav = useNavigate();
	const code = new URL(window.location.href).searchParams.get('code');
	nomadAxios.post('admin/token', { code }).then(() => {
		swalAlert('code 전송완료');
		nav('/Admin', { state: true });
	});

	return <div>loading</div>;
}

export default AdminOauth;
