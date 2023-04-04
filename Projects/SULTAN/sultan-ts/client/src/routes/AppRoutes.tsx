import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import CartPage from '../page/CartPage';
import Catalog from '../page/Catalog';
import Error from '../page/Error';
import Footer from '../page/Footer';
import Header from '../page/Header';
import Order from '../page/Order';
import ProductPage from '../page/ProductPage';
import Shop from '../page/Shop';
import { IProducts } from '../types/types';


interface IAppRoutesProps {

}

const AppRoutes: React.FunctionComponent<IAppRoutesProps> = () => {
	const [cartItems,setCartItems] = useState <IProducts[] | []>([]);
	const [totalPrice, setTotalPrice] = useState<number>(0)
	
	useEffect(()=>{
		getTotalPrice(cartItems)
	},[cartItems])

	const getTotalPrice = (cartItems: IProducts[] | []) => {
		let totalPrice = 0;
		if (cartItems){
			cartItems.map((item) => {
				totalPrice += item.price
			})
		}
		totalPrice = parseFloat(totalPrice.toFixed(2))
		setTotalPrice(totalPrice)
	}
	


	const addToCart = (product:IProducts)=>{
		const updateCartItems = [...cartItems, product]
		console.log('Добавила')
		setCartItems(updateCartItems)
	}
	
	const removeFromCart = (product: IProducts) => {
		const updatedCartItems = cartItems.filter((item) => item.barcode !== product.barcode);
		console.log('Удалила')
		setCartItems(updatedCartItems);
	};

	return (
		<>
			<Header cartItemsCount={cartItems.length} totalPrice = {totalPrice}/>
			<Routes >
				<Route path='/' element={<Shop />}/>
				<Route path='*' element={<Error />}/>
				<Route path='catalog' element={<Catalog addToCart={addToCart} />}/>
				<Route path='catalog/:id' element={<ProductPage />}/>
				<Route path='cart' element={<CartPage cartItems = {cartItems} removeFromCart={removeFromCart}/>}/>
				<Route path='cart/order' element={<Order />}/>
			</Routes>
			<Footer />
		</>
	);
};

export default AppRoutes;
