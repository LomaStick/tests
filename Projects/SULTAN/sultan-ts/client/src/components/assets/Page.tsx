import * as React from 'react';
import classes from './assets.module.css'

interface IPageProps {
	className?:string;
	children?: React.ReactNode;
}

const Page: React.FunctionComponent<IPageProps> = ({className, children}) => {
  return (
	<div className={[className, classes.page].join(' ')}>
		{children}
	</div>
  )
};

export default Page;
