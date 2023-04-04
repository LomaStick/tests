import React from 'react';
import { Link } from 'react-router-dom';

const NavbarItem = ({className,link}) => {
	return (
		<Link className={className+'__item'} to={link.path}>{link.point}</Link>
	);
}

export default NavbarItem;

