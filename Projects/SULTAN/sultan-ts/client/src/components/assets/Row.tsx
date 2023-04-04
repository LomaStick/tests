import * as React from 'react';
import classes from './assets.module.css'

interface IRowProps {
	className?: string;
	children?: React.ReactNode;
}

 const Row: React.FC<IRowProps> = ({ className, children}) => {
  return (
	<div className={[className, classes.row].join(' ')}>
		{children}
	</div>
  );
};

export default Row

