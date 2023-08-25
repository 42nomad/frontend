import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuProps {
	link: string;
	name: string;
}

function Menu({ link, name }: MenuProps) {
	return (
		<li className="z-50 w-full h-14 flex items-center justify-end text-nomad-sand text-xl transition-transform transform hover:scale-105">
			<NavLink to={`${link}`} className={({ isActive }) => ` ${isActive ? 'font-nexonBold' : ''}`}>
				{name}
			</NavLink>
		</li>
	);
}
export default Menu;
