import * as React from 'react';
import { Link } from 'react-router-dom';
import {icons, IContact, InavLink } from '../types/types';
import { contacts, navLinks } from '../utils/consts';
import List from '../components/assets/List';
import Logo from '../components/Logo';
import NavbarItem from '../components/NavbarItem';
import Page from '../components/assets/Page';
import AppInput from '../components/UI/input/AppInput';
import ContactItem from '../components/ContactItem';
import Image from '../components/Image';

import Visa from '../img/Visa.svg';
import Telegram from '../img/logos_telegram.svg';
import WhatsUp from '../img/logos_whatsup.svg';
import Mastercard from '../img/MasterCard.svg';
import Column from '../components/assets/Column';
import Row from '../components/assets/Row';
import Container from '../components/assets/Container';
import Button from '../components/UI/button/Button';




interface IFooterProps {
}

export const Footer: React.FunctionComponent<IFooterProps> = (props) => {
	return (
		<Page className='footer'>
			<Container className='footer__container'>
				<Column  className='footer__info footer-info'>
					<Logo fill='#FFFFFF' className='footer-info' />
					<p className='footer-info__desc'> Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</p>
					<p className='footer-info__subtitle'>Подпишись н скидки и акции</p>
					<AppInput onChange={()=>{}} placeholder='Введите ваш E-mail' icon={icons.arrow_right} />
				</Column>
				<Row className='footer__nav footer-nav'>
					<List className='footer-nav__list' title={navLinks.menu.title} items = {navLinks.menu.links} renderItem={(link: InavLink) =>
						<NavbarItem className='footer-nav' link={link} />}/>
					<List className='footer-nav__list' title={navLinks.categoryes.title} items = {navLinks.categoryes.links} renderItem={(link: InavLink) =>
						<NavbarItem className='footer-nav' link={link} />}/>
					<Column className='footer-nav__list'>
						<p className='footer-nav__list_title'>Скачать прайс-лист:</p>
						<Column className='footer-nav__item'>
							<Button  variant='orange' icon={icons.arrows_price_list} text='Прайс-лист'/>
						</Column >
						<Column className='footer-nav__item footer-social'>
							<p className='footer-social__title'>Связь в мессенджерах:</p>
							<Row>
								<Link to='#' className='footer-nav__logo' ><Image src={WhatsUp} alt='WhatsUp'/></Link>
								<Link to='#' className='footer-nav__logo' ><Image src={Telegram} alt='Telegram'/></Link>
							</Row>
						</Column>
					</Column>
					<Column className='footer-nav__list_wrapper'>
						<List className='footer-nav__list' items={[contacts.phone, contacts.email]} title={contacts.title} renderItem={(contact: IContact) =>
							<ContactItem  contact={contact}	icon = {false} style= {{marginTop: 25}}/>}/>
						<Row>
							<Image className='footer-nav__logo' src={Visa} alt='Visa'/>
							<Image className='footer-nav__logo' src={Mastercard} alt='Mastercard'/>
						</Row>
					</Column>
				</Row>
			</Container>
		</Page>
	);
};

export default Footer;