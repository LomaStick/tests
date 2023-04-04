import React, { ChangeEvent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductService from '../API/ProductSevice';
import Column from '../components/assets/Column';
import Container from '../components/assets/Container';
import List from '../components/assets/List';
import Page from '../components/assets/Page';
import Row from '../components/assets/Row';
import CatalogList from '../components/CatalogList';
import AppInput from '../components/UI/input/AppInput';
import Loader from '../components/UI/Loader/Loader';
import Select from '../components/UI/select/Select';
import { useFetching } from '../hooks/useFetching';
import { useProducts } from '../hooks/useProducts';
import { icons, IProducts} from '../types/types';
import { options } from '../utils/consts';


interface ICatalogProps {
	addToCart: (product: IProducts) => void;
}



const Catalog: React.FunctionComponent<ICatalogProps> = ({addToCart}) => {
	useEffect(()=>{
		fetchProducts();
	},[]) 
	const [products, setProducts] = useState< any[]>([]);
	const [filter, setFilter] = useState({sort: options[0], query: '', fildQuery: ''})
	const sortedAndSearchedProducts = useProducts(products, filter.sort, filter.query)
	const [fetchProducts, isProductsLoading, productsError ] = useFetching(async ()=> {
		const data = await ProductService.getAll();
		setProducts(data);
	})
	const productCategoryes = ProductService.getUniqFieldValues( products ,"typeCategory");

	return (
		<Page className='catalog'>
			<Container>
				<header className='catalog__header catalog-header'>
					<h2 className='catalog-header__title'>Косметика и гигена</h2>
					{/* <AppInput placeholder='Поиск' value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})} /> */}
						<Row>
							<h4 className='catalog-header-select__title'>Сортировка:</h4>
							<Select 
								value={filter.sort}
								options={options}
								classesName='catalog-header-select' 
								onChange={(selection) => {setFilter({...filter, sort :selection})}}
							/>
						</Row>
				</header>
				<List	className='catalog-category'	items={productCategoryes}	renderItem={(category) =>
						<div className='catalog-category__item'>{category}</div>}/>	
				<main className='catalog__main'>
					<Row>
						<aside className='catalog-aside'>
							<Column className="calatalog-aside__price" title='Подбор по параметрам' subtitle='Цена ₸'>
								<input className='catalog-aside-item__price_input' placeholder='0'/>
								<input className='catalog-aside-item__price_input' placeholder='10 000'/>
							</Column>
							<List className='catalog-aside__filter' items={['Производитель', 'Бренд']} renderItem={(title) => 
								<div className='catalog-aside__filter_wrapper'>
									<h4 className='title'>{title}</h4>
									<AppInput placeholder='Поиск...' icon={icons.search} onChange = {(e: ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: e.target.value})}/>
									<p>Checkbox_list</p>
									<button>shaw all</button>
								</div>}/>
							<List className='catalog-aside__category' items={productCategoryes} renderItem={(title) =>
								<Link to='#'> {title} </Link>
							}/>
						</aside>
						<Column className='catalog__content catalog-content'>
							{productsError && <h4 className='catalog-content__list_error'> произошла ошибка ${productsError} </h4>}
							{isProductsLoading
								? <Loader />
								: <CatalogList itemsCountPerPage={9} totalItems={products.length} products={sortedAndSearchedProducts} addToCart={addToCart}/> 
							}

							<h4 className='catalog-content__desc'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
							</h4>
						</Column>
					</Row>
				</main>
				
			</Container>
		</Page>
	);
};

export default Catalog;
