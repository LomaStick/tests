import * as React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Row from '../components/assets/Row';
import Container from '../components/assets/Container';
import Page from '../components/assets/Page';
import { icons, IContact, InavLink } from '../types/types';
import { contacts, navLinks } from '../utils/consts';
import List from '../components/assets/List';
import Image from '../components/Image';
import NavbarItem from '../components/NavbarItem';
import ContactItem from '../components/ContactItem';
import Logo from '../components/Logo';
import AppInput from '../components/UI/input/AppInput';
import CallBack from '../img/callback.svg';
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
import Button from '../components/UI/button/Button';





interface IHeaderProps {
	cartItemsCount: number ;
	totalPrice: number;
}

const Header: React.FunctionComponent<IHeaderProps> = ({cartItemsCount, totalPrice}) => {
	const navigate = useNavigate();
	const location = useLocation();
	function onChangeInput (target: EventTarget & HTMLInputElement, value: string) {
		if (!(location.pathname === '/catalog')){
			navigate("/catalog");
			target.focus()
		}
	}
	return (
		<Page className='header'>
			<Row className='header__row'>
				<Container className='header__container'>
					<List	className='header-contact__list'	items={[contacts.adress, contacts.email]}	renderItem={(contact: IContact) =>
						<ContactItem key={contact.name} contact={contact}	 style= {{marginRight: 25}}/>
					}/>	
					<List className='header-nav' items = {navLinks.menu.links} renderItem={(link: InavLink) =>
						<NavbarItem className='header-nav' link={link} />
					}/>
				</Container>
			</Row>
			<Row className='header__row header-action'>
				<Container className='header__container'>
					<Row className='header-action__list'>
						<Logo className='header-action' fill='#3F4E65'/>
						<Link to={'/catalog'} key={'/catalog'}><Button text='Каталог' icon={icons.catalog} variant="orange" style = {{ marginRight:20}}/></Link>
						<AppInput placeholder='Поиск...' icon={icons.search} onChange={(e) => onChangeInput(e.target, e.target.value)} style = {{marginRight:20}}/>
					</Row>
					<Row className="header-action__list">
						<ContactItem contact={contacts.phone} style= {{textAlign: 'end'}}>
							<div className='header-action__callback header-action__callback_active'>
								<Image src={CallBack} alt='call back'/>
							</div>
						</ContactItem>
						<Button text='Прайс-лист' icon={icons.arrows_price_list} variant='orange' style={{margin:'0 30px'}}/>
						<Link to={'/cart'} key={'/cart'}>
							<div className="basket">
								<div className='basket__icon _icon-basket _alert'> <span>{cartItemsCount}</span></div>
								<div className='basket__content'>
									<span className='basket__title'>Корзина</span>
									<p className='basket__price'>{totalPrice} ₸</p>
								</div>
							</div>
						</Link >
					</Row>
				</Container>
			</Row>
			<Breadcrumbs />
		</Page>
	);
};

export default Header;
