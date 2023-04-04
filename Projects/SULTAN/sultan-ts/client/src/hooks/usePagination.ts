import { useMemo } from "react";

export const useItemsPerPage = (currentPage: number, itemsCountPerPage: number, items: any[]): any[] => {
	const ItemsPerPage = useMemo (() => {
		const startIndex = (currentPage - 1) * itemsCountPerPage;
		const endIndex = startIndex + itemsCountPerPage;
		return items.slice(startIndex, endIndex);
	 }, [currentPage, itemsCountPerPage, items]);
	return ItemsPerPage
}



export const usePageNumbers = (totalItems: number, itemsPerPage: number): number[] => {
	const pageNumbers = useMemo(() => {
		const numbers = [];
		for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
			numbers.push(i);
		}
		return numbers;
		}, [totalItems, itemsPerPage]);
	return pageNumbers
}


