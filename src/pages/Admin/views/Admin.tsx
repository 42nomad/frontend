import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import getAdminRole from '../../../services/getAdminRole';
import postAdminRole from '../../../services/postAdminRole';
import nomadAxios from '../../../utils/nomadAxios';
import swalAlert from '../../../utils/swalAlert';

const input = css`
	${tw`px-2 m-1 rounded-xl border-2 border-nomad-green focus:outline-none`}
`;

const button = css`
	${tw`px-2 rounded-xl bg-white shadow-full shadow-zinc-200`}
`;

function Admin() {
	useEffect(() => {
		getAdminRole().then(() => {
			// console.log(res);
			// if (res.data !== 2) window.location.href = '/';
		});
	}, []);
	const [secret, setSecret] = useState('');
	const handleSecretUpdate = () => {
		nomadAxios.post('admin/secret', { secret }).then(() => {
			swalAlert('secret update');
		});
	};
	const [user, setUser] = useState('');
	const handleUserRole = () => {
		postAdminRole(user, 1).then(() => {
			swalAlert('user role change');
		});
	};
	const handleAmdinToken = () => {
		nomadAxios.get('admin/loginUrl').then((res) => {
			window.location.href = res.data;
		});
	};

	return (
		<div className="flex flex-col items-center text-xl w-full h-full bg-nomad-sand space-y-10">
			<Link to="/staff" className="flex self-start bg-nomad-sand fixed">
				<div id="Logo" className="flex h-15 mt-4 ml-4 font-fugazRegular text-2xl text-nomad-green cursor-pointer">
					42NOMAD
				</div>
			</Link>
			<div className="mt-32 font-nexonBold">Admin Page</div>
			<div className="w-80">
				<input
					type="text"
					placeholder="secret"
					css={input}
					onChange={(e) => {
						setSecret(e.target.value);
					}}
				/>
				<button type="button" css={button} onClick={handleSecretUpdate}>
					secret update
				</button>
			</div>
			<div className="w-80">
				<input
					type="text"
					placeholder="user"
					css={input}
					onChange={(e) => {
						setUser(e.target.value);
					}}
				/>
				<input type="number" placeholder="role" css={input} />
				<button type="button" css={button} onClick={handleUserRole}>
					change user role
				</button>
			</div>
			<div className="w-80">
				<input type="text" placeholder="member delete" css={input} />
				<button type="button" css={button}>
					member delete
				</button>
			</div>
			<div className="w-80">
				<button type="button" css={button}>
					incluster
				</button>
			</div>
			<div className="w-80">
				<button type="button" css={button} onClick={handleAmdinToken}>
					admin token
				</button>
			</div>
			<div className="w-80">
				<input type="text" placeholder="slack address" css={input} />
				<button type="button" css={button}>
					change slack address
				</button>
			</div>
		</div>
	);
}

export default Admin;
