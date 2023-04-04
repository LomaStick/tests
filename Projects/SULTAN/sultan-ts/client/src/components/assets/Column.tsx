import * as React from 'react';


interface IColumnProps {
	className: string;
	children?: React.ReactNode;
	title?: string | null;
	subtitle?: string | null;
}

const Column: React.FunctionComponent<IColumnProps> = ({className, children, title = null, subtitle = null}) => {
	let renderTitle,
		renderSubtitle;
	title ? renderTitle = <h4 className={className + '__title'}>{title}</h4> : renderTitle = null;
	subtitle ? renderSubtitle = <h5 className={className + '__subtitle'}>{subtitle}</h5> : renderSubtitle = null;

	return (
		<div className={className}>
			{renderTitle}
			{renderSubtitle}
			{children}
		</div>
	);
};

export default Column;
