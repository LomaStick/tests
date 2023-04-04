import React, { useEffect, useState } from 'react'; 
import { Navigate, useParams } from 'react-router-dom'; 
import ProductService from '../API/ProductSevice'; 
import Container from '../components/assets/Container';
import Row from '../components/assets/Row';
import Page from '../components/Page';
import ProductCard from '../components/ProductCard';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching'; 
import { IProducts } from '../types/types'; 
 
interface ProductPageParams { 
	id: string; 
	[key: string]: string | undefined; 
} 
 
interface IProductPageProps { 
} 
 
const ProductPage: React.FunctionComponent<IProductPageProps> = (props) => { 
	const id  = Number(useParams<ProductPageParams>().id); 

	const [product, setProduct] = useState<IProducts | null> (null)
	const [fetchProductById, isLoading, error] = useFetching ( async ()=>{ 
		const data = await ProductService.getById (id) 
		setProduct(data)
	}) 

	useEffect(()=>{ 
	fetchProductById()
	}, [id])
 
	
	if (isNaN(id)) return <Navigate to={'*'} />
	if (!product) return <div>Товар не найден</div>; 
	
   
	return ( 
		<Page className='productPage'>
			<Container>
				{isLoading
				?	<Loader />
				:	<Row className='productPage__product product'> 
						<ProductCard variant={'productPage'} product={product} />
					</Row> 
				}
			</Container>
		</Page>
	); 
}; 
 
export default ProductPage;