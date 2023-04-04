import { useMemo } from 'react';
import { IProducts, Option } from '../types/types';



export const useSortedProducts = (products:any[], sort : Option) => {
	const sortedProducts = useMemo<IProducts[]>(()=>{
		if (sort) {
			const sorting = [...products].sort((a, b) => a[sort.value].localeCompare(b[sort.value]))
			if (!sort.increase){
				return sorting.reverse()
			}
			return sorting
			}
		return products;
	}, [sort, products]) 

	return sortedProducts;
}

export const useProducts = (products:any[], sort : Option, query: string) => {
	const sortedProducts = useSortedProducts(products, sort)
	
	const sortedAndSearchedProducts = useMemo<IProducts[]>(()=>{
		return sortedProducts.filter(product => product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
	}, [query, sortedProducts])
	return sortedAndSearchedProducts
}