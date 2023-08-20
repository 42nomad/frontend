import React from 'react';
import { Link } from 'react-router-dom';

interface MenuProps {
	link: string;
	name: string;
}

const Menu = ({ link, name }: MenuProps) => (
	<li className="z-50 w-full h-10 flex items-center justify-end text-nomad-sand transition-transform transform hover:scale-105">
		<Link to={`${link}`}>{name}</Link>
	</li>
);

export default Menu;
