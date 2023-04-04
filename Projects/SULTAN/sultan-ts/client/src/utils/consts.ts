import { icons, IContactsList, InavLinksList } from "../types/types"

export const navLinks: InavLinksList = {
	menu: {
		title: 'Меню сайта:',
		links:[
			{path: '#', text: 'О компании'},
			{path: '#', text: 'Доставка и оплата'},
			{path: '#', text: 'Возврат'},
			{path: '#', text: 'Контакты'},
		]
	},
	categoryes:{
		title: 'Категории:',
		links:[
			{path: '#', text: 'Бытовая химия'},
			{path: '#', text: 'Косметика и гигиена'},
			{path: '#', text: 'Товары для дома'},
			{path: '#', text: 'Товары для детей и мам'},
			{path: '#', text: 'Посуда'},
		]
	},
}

export const contacts: IContactsList = {
	title: 'Контакты:',
	adress:{
			name: 'adress',
			icon: icons.location,
			title: 'г. Кокчетав, ул. Ж. Ташенова 129Б',
			subtitle: '(Рынок Восточный)'
		},
	email:{
			name: 'email',
			icon: icons.email,
			title: 'opt.sultan@mail.ru',
			subtitle: 'На связи в любое время'
		},
	phone:{
			name: 'phone',
			icon: icons.null,
			title: '+7 (777) 490-00-91',
			subtitle: 'время работы: 9:00-20:00',
			button: 'Заказать звонок'
		}
}

export const options = [
	{
		value: 'title',
		label: 'Название',
		increase: true
	},
	{
		value: 'title',
		label: 'Название',
		increase: false
	},
	{
		value: 'price',
		label: 'Цена',
		increase: true
	},
	{
		value: 'price',
		label: 'Цена',
		increase: false
	}
]