import React, {FC} from 'react';
import { Link } from 'react-router-dom';

interface INavBarItemProps{
	className: string;
	link: {
		path: string;
		point: string;
	}
}

export const NavbarItem: FC<INavBarItemProps> = ({className,link}) => {
	return (
		<Link className={className+'__item'} to={link.path}>{link.point}</Link>
	);
}

