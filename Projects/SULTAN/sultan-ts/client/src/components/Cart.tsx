import * as React from 'react';
import { IProducts } from '../types/types';
import List from './assets/List';
import ProductCard from './ProductCard';

interface IAppProps {
	cartItems: IProducts[] | [];
	removeFromCart: (product:IProducts) => void
}

const App: React.FunctionComponent<IAppProps> = ({cartItems,removeFromCart}) => {
  return (
	<>
		{cartItems.length
					? <List className='cart__list' items={cartItems} renderItem = {(product) => 
						<ProductCard 
							key={product.barcode} 
							variant={'cart'} 
							product={product}
							removeFromCart={removeFromCart}
							/>}/>
					: <h4 className='cartPage__list_empty'> Корзина пуста </h4>
				}
	</>
  );
};

export default App;
