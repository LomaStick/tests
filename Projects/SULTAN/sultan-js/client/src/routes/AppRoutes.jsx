import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Basket from '../page/Basket';
import Catalog from '../page/Catalog';
import Error from '../page/Error';
import Order from '../page/Order';
import Product from '../page/Product';
import Shop from '../page/Shop';

const AppRoutes = () => {
	return (
		<main className='main'>
			<Routes>
				<Route path='/' element={<Shop/>}/>
				<Route path='*' element={<Error/>}/>
				<Route path='catalog' element={<Catalog/>}/>
				<Route path='product/:id' element={<Product />}/>
				<Route path='basket' element={<Basket />}/>
				<Route path='order' element={<Order />}/>
			</Routes>
		</main>
	);
}

export default AppRoutes;
