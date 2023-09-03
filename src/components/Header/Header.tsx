import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { RootState } from '../../store/store';
import switchHome from '../../utils/switchHome';
import SideBar from './SideBar';

function Header() {
	const nav = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	const home = useSelector((state: RootState) => state.home.home);

	return (
		<div id="Header" className="z-40 w-full max-w-max-wid bg-nomad-sand fixed">
			<div className="flex justify-between">
				<button type='button' className="h-15 mt-4 ml-4" onClick={()=>switchHome(home, nav)}>
					<div id="Logo" className="font-fugazRegular text-2xl text-nomad-green cursor-pointer">
						42NOMAD
					</div>
				</button>
				{!isOpen && (
					<div id="HamburgerButton" className="z-50 bg-transparent">
						<Bars3Icon
							className="items-center z-50 transition-transform transform hover:scale-110 mt-2 mr-4 w-10 h-10 stroke-nomad-green cursor-pointer"
							onClick={() => {
								setIsOpen(!isOpen);
							}}
						/>
					</div>
				)}
			</div>
			{isOpen && <SideBar setIsOpen={setIsOpen} />}
		</div>
	);
}

export default Header;
