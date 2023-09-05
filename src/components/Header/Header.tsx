import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import SideBar from './SideBar';
import Logo from './Logo';

function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div id="Header" className="z-40 w-full max-w-max-wid bg-nomad-sand fixed">
			<div className="flex justify-between">
				<Logo />
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
