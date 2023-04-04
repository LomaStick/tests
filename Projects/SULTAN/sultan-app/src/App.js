import React, {useState} from 'react';
import ProductList from './components/ProductList';
import Select from './components/UI/select/Select';
import './static/styles/css/App.css';

export default function App() {
	const [products, setProducts] = useState([]);
		// {imgurl: '#', title: 'аа', sizevalue: 0, sizetype: 'Grammma/milliliters', barcode: '0000000000001', manufacturer: 'manufacturer', brand: 'brand', description: 'description', price: '20', typeOfCare: 'type of care'},
		// {imgurl: '#', title: 'гг', sizevalue: 0, sizetype: 'Grammma/milliliters', barcode: '0000000000002', manufacturer: 'manufacturer', brand: 'brand', description: 'description', price: '18', typeOfCare: 'type of care'},
		// {imgurl: '#', title: 'рр', sizevalue: 0, sizetype: 'Grammma/milliliters', barcode: '0000000000003', manufacturer: 'manufacturer', brand: 'brand', description: 'description', price: '12', typeOfCare: 'type of care'},
	const [selectedSort, setSelectedSort] = useState('');
	const sortProducts = (sort) => {
		setSelectedSort(sort);
		sort = sort.split('-')[0]
		setProducts([...products].sort((a, b) => a[sort].localeCompare(b[sort])))
		
		console.log(sort.split('-')[0]);
	}
	
	async function fetchProducts(){
		const data = await fetch ('./data/data.json')
			.then(data => data.json())
		console.log(data);
		setProducts(data)
	}
	return (
		<div className='Catalog'>
			<button onClick={fetchProducts}> get data</button>
			<div className='container'>
				<header className='Catalog__header Catalog-header'>
					<h2 className='Catalog-header__title'>Косметика и гигена</h2>
					<div className='Catalog-header__sorting'>
						<p>Сортировка:</p>
						<Select 
							value={selectedSort}
							onChange = {sortProducts}
							options={[
								{value: 'title-increase', name: 'Название В'},
								{value: 'title-decrease', name: 'Название У'},
								{value: 'price-increase', name: 'Цена В'},
								{value: 'price-decrease', name: 'Цена У'},
							]}/>
					</div>
				</header>
				<section className='Catalog-header__typelist'>
					<div className='Catalog-header__typeitem'>Уход <br/> за телом</div>
					<div className='Catalog-header__typeitem'>Уход <br/> за руками</div>
					<div className='Catalog-header__typeitem'>Уход <br/> за телом</div>
					<div className='Catalog-header__typeitem'>Уход <br/> за руками</div>
					<div className='Catalog-header__typeitem'>Уход <br/> за телом</div>
					<div className='Catalog-header__typeitem'>Уход <br/> за руками</div>
				</section>
				<main className='Catalog__main'>
					<aside className='Catalog__aside Catalog-aside'>
						<span className='Catalog-aside__title'>Подбор по параметрам</span>
						<div className='Catalog-aside__price'>Фильтр по цене</div>
						<div className='Catalog-aside__item'>Фильтр по производителю</div>
						<div className='Catalog-aside__item'>Фильтр по бренду</div>
						<div className='Catalog-aside__item'>Уход за телом</div>
						<div className='Catalog-aside__item'>Уход за руками</div>
					</aside>
					<div className='Catalog__content Catalog-content'>
						<ProductList products={products}/>
						<div className='Catalog-content__transition'>
							<button type='button' className='Catalog-content__btnt Catalog-content__btnt_active'>1</button>
							<button type='button' className='Catalog-content__btnt'>2</button>
							<button type='button' className='Catalog-content__btnt'>3</button>
							<button type='button' className='Catalog-content__btnt'>4</button>
						</div>
						<p className='Catalog-content__text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada. </p>
					</div>
				</main>
			</div>
			<div className='product'></div>
		</div>
	)
}
