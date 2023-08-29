import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuProps {
	link: string;
	name: string;
}

function Menu({ link, name }: MenuProps) {
	return (
		<NavLink
			to={`${link}`}
			className={({ isActive }) => `my-0.5 pr-5 rounded-[1.25rem] hover:bg-nomad-sand/20 hover:outline-none \
					 active:bg-nomad-sand/30 active:outline-none \
					z-50 w-full h-14 flex items-center justify-end text-nomad-sand text-xl transition-colors duration-50 ${
						isActive ? 'bg-nomad-sand/30 outline-none' : ''
					}`}
		>
			{name}
		</NavLink>
	);
}
export default Menu;
