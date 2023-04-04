import * as React from 'react';
import { Link } from 'react-router-dom';
import { InavLink } from '../types/types';



interface INavbarItemProps {
	className? : string;
	link: InavLink
}

const NavbarItem: React.FunctionComponent<INavbarItemProps> = ({className, link}) => {
	return (
		<Link key={link.path} className={className+'__item'} to={link.path}>{link.text}</Link>
	);
};

export default NavbarItem;
