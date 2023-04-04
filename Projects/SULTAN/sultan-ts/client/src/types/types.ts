export enum icons {
	null = 'null',
	arrow_right = '_icon-arrows-right',
	arrow_double = '_icon-arrows-double',
	arrow_down = '_icon-arrows-down',
	arrows_left = '_icon-arrows-left',
	arrows_price_list = '_icon-arrows-price-list',
	basket = '_icon-basket',
	delete = '_icon-delete',
	catalog = '_icon-catalog',
	delivery = '_icon-delivery',
	foundation_pencil = '_icon-foundation-pencil',
	location = '_icon-location',
	email = '_icon-email',
	pay = '_icon-pay',
	question = '_icon-question',
	search = '_icon-search',
	share = '_icon-share',
}

export interface InavLink{
	path:string;
	text:string;
}
export interface InavLinks {
	title: string;
	links: InavLink[]
}
export interface InavLinksList{
	menu:InavLinks
	categoryes: InavLinks
}

export interface IContact{
		name: string
		icon?: icons,
		title: string,
		subtitle: string
		button?: string
}
export interface IContactsList{
	title: string;
	adress: IContact
	email: IContact
	phone: IContact
}
export type Option = {
	value: string;
	label: string;
	increase: boolean;
}

export type IProducts = {
		barcode: number,
		title: string,
		imgurl: string,
		sizevalue: string,
		sizetype: string,
		manufacturer: string, 
		brand: string, 
		description: string, 
		price: number,
		currency: string,
		typeCategory: string,
}
