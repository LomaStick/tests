import * as React from 'react';
import classes from './assets.module.css'

interface IContainerProps {
	className?:string;
	children?: React.ReactNode;
}

const Container: React.FunctionComponent<IContainerProps> = ({className, children}) => {
  return (
	<div className={[className, classes.container].join(' ')}>
		{children}
	</div>
  );
};

export default Container;
