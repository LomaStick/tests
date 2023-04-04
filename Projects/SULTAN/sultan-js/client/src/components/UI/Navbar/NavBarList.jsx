import React from 'react';
import NavbarItem from './NavbarItem';

const NavbarList = ({className,links, ...props}) => {
	return (
		<div className={className+'__list'}>
			<span className={className+'__title'}>{props.title}</span>
			{links.map(link =>
				<NavbarItem className={className} link = {link}/>
			)}
		</div>
	);
}

export default NavbarList;
