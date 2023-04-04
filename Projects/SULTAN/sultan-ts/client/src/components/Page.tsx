import React, {FC} from 'react';


interface IPageProps {
	className: string;
	container? : boolean;
	wrapper? : boolean;
	children? : React.ReactNode
}

const Page: FC<IPageProps> = ({className, container = true, children}) => {
	if (!container){
		return (
			<div className={className}>
					{children}
			</div>
		)
	}
	return (
		<div className={className}>
				<div className={className + "__container container"}>		
						{children}
				</div>
		</div>
	);
};

export default Page;
