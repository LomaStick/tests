import React from 'react';
import Container from '../components/assets/Container';
import List from '../components/assets/List';
import Page from '../components/assets/Page';

import ProductCard from '../components/ProductCard';
import { IProducts } from '../types/types';

interface ICartPageProps {
	cartItems: IProducts[] | [];
	removeFromCart: (product:IProducts) => void
}

const CartPage: React.FunctionComponent<ICartPageProps> = ({cartItems, removeFromCart}) => {

	return (
		<Page className='cartPage'>
			<Container >
				<div className='cartPage_header'>
					<h2 className='cartPage__title'>КОРЗИНА</h2>
				</div>
				{cartItems.length
					? <List className='cartPage__list' items={cartItems} renderItem = {(product) => 
						<ProductCard 
							key={product.barcode} 
							variant={'cart'} 
							product={product}
							removeFromCart={removeFromCart}
							/>}/>
					: <h4 className='cartPage__list_empty'> Корзина пуста </h4>
				}
			</Container>
		</Page>
	);
};

export default CartPage;
