import React from 'react';
import classes from './Button.module.css';
const ButtonCart = ({children, ...props}) => {
	return (
		<button {...props} className={classes.buttonCart}>
			{children}
		</button>
	);
}

export default ButtonCart;
