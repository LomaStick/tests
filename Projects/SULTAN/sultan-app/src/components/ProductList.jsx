import React from 'react';
import ProductItem from './ProductItem';

const productList = ({products}) => {
	if (!products.length){
		return (
			<div className='error__empty'>Товар отсутствует</div>
		)
	}
	return (
		<section className='Catalog-content__productList_grid'>
			{products.map(product => <ProductItem product = {product} key={product.barcode}/>)}
		</section>
	);
}

export default productList;
