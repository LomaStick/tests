import React, { useState } from "react";
import { icons } from "../../../types/types";
import Icon from "../../Icon";


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text?: string;
	className?: string
	variant?: "orange" | "white" | "callback";
	onClick?: () => void;
	icon?: icons;
	};

const Button: React.FunctionComponent<ButtonProps> = ({
	text, 
	className = '', 
	variant = "orange", 
	onClick, 
	icon,
	...props
}) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const getClassName = () => {
		let getClassName;
		className ? getClassName = className : getClassName = 'Button'
		if (variant === "orange") {
			getClassName += " Button-orange";
			if (isHovered) {
				getClassName += " Button-orange_hover";
			}
		} else if (variant === "white") {
			getClassName += " Button-white";
			if (isHovered) {
				getClassName += " Button-white_hover";
			}
		} else if (variant === "callback") {
			getClassName += " Button-callback";
		if (isHovered) {
			getClassName += " Button-callback_hover";
		}
		}
		return getClassName;
	};

	return (
		<button
			className={getClassName()}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...props}
		>
			{text && <span className="Button-text">{text}</span>}
			{icon && <Icon className={'Button-icon'} icon={icon}/>}
		</button>
	);
};
export default Button