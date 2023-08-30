import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import SideBarContent from './SideBarContent';

function SideBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div id="Header" className="z-40 w-full max-w-max-wid bg-nomad-sand fixed">
				<div className="flex justify-between">
					<Link to="/main" className="h-15 mt-4 ml-4">
						<div id="Logo" className="font-fugazRegular text-2xl text-nomad-green cursor-pointer">
							42NOMAD
						</div>
					</Link>
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
			</div>
			{isOpen && (
				<div className="flex flex-row-reverse bg-white">
					<SideBarContent setIsOpen={setIsOpen} />
				</div>
			)}
		</>
	);
}

export default SideBar;
