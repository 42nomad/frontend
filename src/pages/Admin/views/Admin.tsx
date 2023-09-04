import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import tw from 'twin.macro';
import handleSecretUpdate from '../logics/handleSecretUpdate';
import handleUserRole from '../logics/handleUserRole';
import handleMemberDelete from '../logics/handleMemberDelete';
import handleInCluster from '../logics/handleInCluster';
import handleAmdinLogin from '../logics/handleAdminLogin';
import handleSlackAddress from '../logics/handleSlackAddress';
import Loading from '../../../components/Loading/Loading';
import getAdminRole from '../../../services/getAdminRole';

const input = css`
	${tw`px-4 m-1 rounded-xl border-2 border-nomad-green focus:outline-none`}
`;

const button = css`
	${tw`px-2 rounded-xl bg-white shadow-full shadow-zinc-200`}
`;

function Admin() {
	getAdminRole();

	const [secret, setSecret] = useState('');
	const [user, setUser] = useState('');
	const [role, setRole] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [member, setMember] = useState('');
	const [slackAddress, setSlackAddress] = useState('');

	return (
		<div className="flex flex-col items-center text-xl w-full h-full bg-nomad-sand space-y-10">
			<Link to="/staff" className="flex self-start bg-nomad-sand fixed">
				<div id="Logo" className="flex h-15 mt-4 ml-4 font-fugazRegular text-2xl text-nomad-green cursor-pointer">
					42NOMAD
				</div>
			</Link>
			<div className="mt-32 font-nexonBold">Admin Page</div>
			{isLoading ? <Loading /> : null}
			<div className="w-80">
				<input
					type="text"
					placeholder="secret"
					css={input}
					onChange={(e) => {
						setSecret(e.target.value);
					}}
				/>
				<button type="button" css={button} onClick={() => handleSecretUpdate(secret)}>
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
				<div className="flex flex-row items-center">
					<input
						type="number"
						placeholder="role"
						css={input}
						min={0}
						max={2}
						onChange={(e) => {
							setRole(Number(e.target.value));
						}}
						className="w-20"
					/>
					<div className="text-sm">role: 0 - user, 1 - staff, 2 - admin</div>
				</div>
				<button type="button" css={button} onClick={() => handleUserRole(user, role)}>
					change user role
				</button>
			</div>
			<div className="w-80">
				<input
					type="text"
					placeholder="member delete"
					css={input}
					onChange={(e) => {
						setMember(e.target.value);
					}}
				/>
				<button type="button" css={button} onClick={() => handleMemberDelete(member)}>
					member delete
				</button>
			</div>
			<div className="w-80">
				<button
					type="button"
					css={button}
					onClick={() => handleInCluster({ isLoading: { state: isLoading, setState: setIsLoading } })}
				>
					incluster
				</button>
			</div>
			<div className="w-80">
				<button type="button" css={button} onClick={handleAmdinLogin}>
					admin Token 발급
				</button>
			</div>
			<div className="w-80">
				<input
					type="text"
					placeholder="slack address"
					css={input}
					onChange={() => {
						setSlackAddress(slackAddress);
					}}
				/>
				<button type="button" css={button} onClick={() => handleSlackAddress(slackAddress)}>
					change slack address
				</button>
			</div>
		</div>
	);
}

export default Admin;
