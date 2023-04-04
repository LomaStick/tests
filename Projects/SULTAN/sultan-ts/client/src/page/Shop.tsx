import * as React from 'react';
import { Navigate } from 'react-router-dom';

interface IShopProps {
}

const Shop: React.FunctionComponent<IShopProps> = (props) => {
	return (
		<div className='indexPage'>
			<Navigate to={'catalog'} />
		</div>
	);
};

export default Shop;
