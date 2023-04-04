import * as React from 'react';

interface IAppPaginationProps {
	pageNumbers: number[];
	currentPage: number;
	className: string;
	onClick: (number:number) => void;
}

const AppPagination: React.FunctionComponent<IAppPaginationProps> = ({pageNumbers, currentPage, className, onClick}) => {
  return (
		<div className={className+'_wrapper'}>
			{pageNumbers.map((number) => (
				<div key={number} onClick={() => onClick(number)} className={[className+'_link', currentPage === number ? className+'_active': ''].join(' ')}>
					{number}
				</div>
			))}
		</div>
  ) ;
};

export default AppPagination