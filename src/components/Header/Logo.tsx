import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import switchHome from '../../utils/switchHome';

function Logo() {
	const nav = useNavigate();
	const home = useSelector((state: RootState) => state.home.home);

	return (
		<button type="button" className="h-15 mt-4 ml-4" onClick={() => switchHome(home, nav)}>
			<div id="Logo" className="font-fugazRegular text-2xl text-nomad-green cursor-pointer">
				42NOMAD
			</div>
		</button>
	);
}

export default Logo;
