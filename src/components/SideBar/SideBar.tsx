import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SideBarContent from './SideBarContent';

function SideBar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div id="Header" className="z-40 w-full max-w-max-wid bg-nomad-sand fixed">
				<div className="flex justify-between">
					<Link to="/" className="h-15 mt-4 ml-4">
						<div id="Logo" className="font-fugazRegular text-2xl text-nomad-green">
							42NOMAD
						</div>
					</Link>
					{!isOpen && (
						<div id="HamburgerButton" className="z-50 bg-transparent">
							<button
								type="button"
								className="items-center z-50 transition-transform transform hover:scale-110 mt-2 mr-4"
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
								</svg>
							</button>
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
