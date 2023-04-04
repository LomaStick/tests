import * as React from 'react';
import { IContact } from '../types/types';
import classes from './styles/ContactItem.module.css'

import  Icon from './Icon';
import Button from './UI/button/Button';

interface IContactItemProps {
	contact: IContact
	icon?: boolean;
	style?: object;
	children?: React.ReactNode;
}

const ContactItem: React.FunctionComponent<IContactItemProps> = ({icon = true, contact, ...props}) => {

	return (
		<div className={classes.wrapper}>
			{icon && contact.icon && <Icon className={classes.icon} icon={contact.icon}/>}
			<div className={classes.item} style = {props.style}>
				<span className={classes.title}>{contact.title}</span>
				<p className={classes.subtitle}>{contact.subtitle}</p>
				{contact.button && <Button variant='callback' text={contact.button}/>}
			</div>
			{props.children}
		</div>
	);
};

export default ContactItem;
