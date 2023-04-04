import * as React from 'react';
import { icons } from '../../../types/types';
import  Icon from '../../Icon';
import classes from './AppInput.module.css'

interface IAppInputProps {
	placeholder?:string
	value?:string;
	icon?:icons
	style?: object;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppInput: React.FunctionComponent<IAppInputProps> = ({placeholder = '', value, style, icon, onChange}) => {
	




	return (
		<div className={classes.wrapper} style = {style}>
			<input 
				type = 'text'
				className={classes.input}
				placeholder = {placeholder}
				value = {value}
				onChange = {onChange}
			/>
			<button type='submit'className={classes.icon}>
				{icon && <Icon className={classes.icon} icon={icon}/>}
			</button>
		</div>
	);
};

export default AppInput;
