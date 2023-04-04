import React from 'react';
import ButtonCart from './UI/button/ButtonCart';

const productItem = (props) => {
	return (
		<div className='Catalog-content-productItem Catalog-content-productItem'>
			<div className='Catalog-content-productItem__img_wrapper'>
				<img src={props.product.imgurl} alt="no_image" className='Catalog-content-productItem__img'/>
			</div>
			<div className='Catalog-content-productItem__typesize'>{props.product.sizevalue} {props.product.sizetype}</div>
			<div className='Catalog-content-productItem__title'> <b>{props.product.brand}</b> {props.product.title}</div>
			<div className='Catalog-content-productItem__list'>
				<div className='Catalog-content-productItem__item'>Штрихкод {props.product.barcode}</div>
				<div className='Catalog-content-productItem__item'>Произовдитель {props.product.manufacturer}</div>
				<div className='Catalog-content-productItem__item'>Бренд {props.product.brand} </div>
			</div>
			<div className='Catalog-content-productItem__footer'>
				<p className='Catalog-content-productItem__price'>{props.product.price} {props.product.currency}</p>
				<ButtonCart>в корзину</ButtonCart>
			</div>
		</div>
	);
}

export default productItem;
