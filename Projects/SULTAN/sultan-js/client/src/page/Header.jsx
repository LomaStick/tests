import  { React } from 'react';
import Page from '../components/Page';
import NavbarList from '../components/UI/Navbar/NavbarList.js';


const Header = () => {
	const links = [
		{path: '#', point: 'О компании'},
		{path: '#', point: 'Доставка и оплата'},
		{path: '#', point: 'Возврат'},
		{path: '#', point: 'Контакты'}
	]

	return (
			<Page className ='header '>
				<div className='header__row'>
						<div className='header-nav__contacts header-nav-contacts'>
							<div className="header-nav-contacts__adress _icon-location">г. Кокчетав, ул. Ж. Ташенова 129Б (Рынок Восточный)</div>
							<div className="header-nav-contacts__mail _icon-mail">opt.sultan@mail.ru На связи в любое время</div>
						</div>
						<NavbarList className='header-nav'links={links} />
				</div>
				<div className="header__row header-actions">
					<img src="../styles/img/logos/App.png" alt="logo" className="logo" />
					<button>Каталог</button>
					<input type="text" placeholder='Поиск'/>
					<div className='callback'></div>
					<button>Прайс-лист</button>
					<div className="basket"></div>
				</div>
				
			</Page>
	);
}

export default Header;
