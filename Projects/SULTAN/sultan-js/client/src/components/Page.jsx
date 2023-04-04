import React from 'react';

const Page = ({className, ...props}) => {
	return (
		<div className={className}{...props}>
			<div className="container">
				<div className={className + '__wrapper'}>
					{props.children}
				</div>
			</div>
		</div>
	);
}

export default Page;
