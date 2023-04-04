import * as React from 'react';
import { icons } from '../types/types';
import classes from './styles/Icon.module.css'



interface IIconProps {
	className?: string;
	icon: icons;
	onClick?: ()=> void;
}

const Icon: React.FunctionComponent<IIconProps> = ({icon, className = '', onClick}) => {
  return (
	<div onClick = {onClick} className={[className, icon, classes.icons].join(' ')}/>
  );
};

export default Icon;
