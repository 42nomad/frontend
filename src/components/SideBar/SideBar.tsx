import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBarContent from './SideBarContent';

function SideBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div id="Header" className="flex justify-between fixed z-40 bg-transparent max-w-max-wid">
			<div id="Logo" className="font-fugazRegular z-40 w-10 h-15 mt-4 ml-4 text-2xl text-nomad-green">
				42NOMAD
				<Link to="/" />
			</div>
			<div id="HamburgerButton" className="z-50 bg-transparent w-96 relative">
				{!isOpen ? (
					<button
						type="button"
						className="float-right relative flex items-center z-50 mt-2 mr-4 transition-transform transform hover:scale-110"
						onClick={() => {
							setIsOpen(!isOpen);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							className="w-10 h-10 z-50 stroke-nomad-green"
						>
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>{' '}
					</button>
				) : (
					<SideBarContent setIsOpen={setIsOpen} />
				)}
			</div>
		</div>
	);
}

export default SideBar;
