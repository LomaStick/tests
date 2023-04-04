import {IProducts} from "../types/types";

export default class ProductService{
	
	static async getAll(){
		const response = await fetch ('/data/data.json')
		return await response.json()
	};

	static async getById(id:number){
		const response = await fetch ('/data/data.json')
		const products = await response.json()
		return products.find((product: IProducts) => product.barcode === id);
	};
	
	static  getUniqFieldValues( products: IProducts[], field: keyof IProducts): (number | string)[] {
		const values: (string | number)[] = [];

		products.forEach((product) => {
		  if (!values.includes(product[field])) {
			 values.push(product[field]);
		  }
		});
	 
		return values;
	}
}