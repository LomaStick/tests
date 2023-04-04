import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

import Container from '../../assets/Container';
import Row from '../../assets/Row';
import './Breadcrumbs.css'

export interface IBreadcrumbsLocationState{
	id: string;
	path: string;
	title: string;
	url: string;
}

interface IBreadcrumbsProps {}

const Breadcrumbs: React.FunctionComponent<IBreadcrumbsProps> = () => {
	
	function crumbValid (crumb:string){

		if (typeof crumb === 'string') {
			(crumb === 'catalog') ? crumb = 'Каталог' :
			(crumb === 'basket') ? crumb = 'Корзина' : 
			(crumb === 'order') ? crumb = 'Оформление заказа' : 
			(crumb === 'cart') ? crumb = 'Корзина':
			crumb = 'Товар'
		}
		return crumb 
	}

	const location = useLocation();
	let currentLink = ''
	let renderMainLink : React.ReactNode | null
	// renderMainLink = null;
	location.pathname.split('/').filter(crumb => crumb).length !== 0 ? renderMainLink = <Link className='crumb' to={'/'}> Главная </Link> : renderMainLink = null 
	
	const crumbs = location.pathname.split('/')
	.filter(crumb => crumb !== '')
	.map(crumb => {
		currentLink += `/${crumb}`
		return (
				<div className='crumb' key={crumb}>		
					<Link to={currentLink}>{crumbValid(crumb)}</Link>
				</div>
		)
	})
	
	return (
		<Container  className='breadcrumbs'>
			<Row>
				{renderMainLink}
				{crumbs}
			</Row>
		</Container>
	);
};

export default Breadcrumbs;
