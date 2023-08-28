import React from 'react';
// import getLogin from '../../../services/getLogin';

function Login() {
	return (
		<div className='bg-nomad-green h-full flex flex-col justify-center items-center'>
			<div className='font-fugazRegular text-nomad-sand text-6xl mb-5'>42 NOMAD</div>
			<button type='button' className='text-nomad-green bg-nomad-sand w-5/12 rounded-3xl h-11 text-xl'
				onClick={()=>{window.location.href = `${process.env.REACT_APP_API_URL}oauth2/authorization/42seoul`}}>Login</button>
		</div>
	);
}

export default Login;
