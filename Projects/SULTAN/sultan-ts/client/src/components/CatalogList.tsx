import React, { useState } from 'react';
import { useItemsPerPage, usePageNumbers } from '../hooks/usePagination';
import { icons, IProducts } from '../types/types';
import List from './assets/List';
import Icon from './Icon';
import ProductCard from './ProductCard';
import AppPagination from './UI/pagination/AppPagination'



interface ICatalogListProps {
	itemsCountPerPage: number;
	totalItems: number;
	products: IProducts[];
	addToCart: (product: IProducts) => void;
}

const CatalogList: React.FunctionComponent<ICatalogListProps> = ({itemsCountPerPage, totalItems, products, addToCart}) => {
	const [currentPage, setCurrentPage] = useState (1);
	const productPerPage = useItemsPerPage(currentPage, itemsCountPerPage, products)
	const pageNumbers = usePageNumbers(totalItems, itemsCountPerPage);

	return (
		<>
			{products.length 
				? <List className='catalog-content__list _grid' items={productPerPage} renderItem = {(product) => 
					<ProductCard key={product.barcode} variant={'catalog'} product={product} addToCart={addToCart} />}/>
				: <div className='catalog-content__list_error'>Товары не найдены...</div>}
				
				<div className="catalog-content__pagination catalog-content-pagination">
					<Icon onClick={()=> setCurrentPage(currentPage > 1 ? currentPage - 1: currentPage)} className='catalog-content-pagination_icon' icon={icons.arrows_left} />
					<AppPagination currentPage={currentPage} pageNumbers = {pageNumbers} className="catalog-content-pagination" onClick={(pageNumber) => setCurrentPage(pageNumber)}/>
					<Icon onClick={()=> setCurrentPage(currentPage < pageNumbers.length ? currentPage + 1: currentPage)} className='catalog-content-pagination_icon' icon={icons.arrow_right} />
				</div>


		</>
	)
}
export default CatalogList;