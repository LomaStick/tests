import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { icons, IProducts } from "../types/types"; 
import Image from "./Image";
import sizeboximg from "../img/icons/sizebox.svg"
import sizebottleimg from "../img/icons/sizebottle.svg"
import Button from "./UI/button/Button";



type IProductCardProps = {
  product: IProducts;
  variant?: "productPage" | "catalog" | "cart";
  addToCart?:(product:IProducts) => void;
  removeFromCart?: (product:IProducts) => void;
};

const ProductCard: FC<IProductCardProps> = ({ product, variant, addToCart, removeFromCart }) => {
	const { title,imgurl, sizevalue, sizetype, barcode , manufacturer, brand, description, price, currency} = product;
	const router = useNavigate()
	
	let sizeimg: string;
	sizetype === 'мл' ? sizeimg = sizebottleimg : sizeimg = sizeboximg;

	function handleClickAddToCart(product: IProducts){
		if (addToCart){
			addToCart(product)
		}else{
			console.log('Что-то пошло не так с передачей  функции addFromCart в пропсы')
		}
	}
	function handleClickRemoveCart(product: IProducts){
		if (removeFromCart){
			removeFromCart(product)
		}else{
			console.log('Что-то пошло не так с передачей  функции removeFromCart в пропсы')
		}
	}

	const renderCatalogVariant = () => {
		return (
			<div className="product-card_catalog" id={`${barcode}`}>
				<div className="product-card__img">
					<Image  src={'/data/img/'+ imgurl} alt=''/>
				</div>
				<div className="product-card__size">
					<Image  src={sizeimg} alt='sizeimg'/>
					<span>{sizevalue} {sizetype}</span>
				</div>
				<button  className='product-card__title' onClick={()=> router(`${barcode}`)}>
					<span><b>{brand}</b> {title}</span>
				</button>
				<div className='product-card__attr_list'>
					<div className='product-card__attr'>Штрихкод: <span>{barcode}</span></div>
					<div className='product-card__attr'>Произовдитель: <span>{manufacturer}</span></div>
					<div className='product-card__attr'>Бренд: <span>{brand}</span> </div>
				</div>
				<div className='product-card__actions'>
					<span className='product-card__price'>{price} {currency}</span>
					<Button variant='orange' text='В корзину' icon={icons.basket} onClick={()=>handleClickAddToCart(product)} style={{width: 153, height: 45}} />
				</div>
			</div>
    );
  };


  const renderProductPageVariant = () => {
    return (
      <div className="product-card_productPage">
        	<div className="product-card__img">
					<Image  src={'/data/img/'+ imgurl} alt=''/>
			</div>
			<div className="product-card__content">
				<span className="product-card__count">В наличии</span>
				<div  className='product-card__title'>
					<span><b>{brand}</b> {title}</span>
				</div>
				<div className="product-card__size">
					<Image  src={sizeimg} alt='sizeimg'/>
					<span>{sizevalue} {sizetype}</span>
				</div>
				<div className='product-card__actions product-cart-actions'>
					<div className="product-cart-actions__cart"> 
						<span className='product-card__price'>{price} {currency}</span>
						<button className="pruduct-card__btnCountInCart"> - </button>
							<span>1</span>
						<button className="pruduct-card__btns_CountInCart"> + </button>
						<Button variant={'orange'} text={'В корзину'} icon={icons.basket} style={{width: 153, height: 45}}/>
					</div>
					<div className="product-cart-actions__other">
						<Button icon={icons.share} variant='white'style={{marginRight: 10}}/>
						<p className="Button-white" style={{maxWidth: 315, padding: 35, marginRight: 10}}> При покупке от  10 000 ₸ бесплатная доставка по Кокчетаву и области </p>
						<Button 
							variant="white" 
							icon={icons.arrows_price_list} 
							text="Прайс-лист"
							style={{width: 185}}
						/> 
					</div>
				</div>
				<div className='product-card__attr_list'>
					<p className='product-card__attr'>Произовдитель: <span>{manufacturer}</span></p>
					<p className='product-card__attr'>Бренд: <span>{brand}</span> </p>
					<p className='product-card__attr'>Штрихкод: <span>{barcode}</span></p>
				</div>
				<div className="product-card__desc">
					<button > Описание: кнопка дропа </button>
					<span className='product-card__descText'>{description}</span>
				</div>
			</div>
      </div>
    );
  };

  const renderCartVariant = () => {
		return (
			<div className="product-card_cart">
				<div className="product-card__img">
						<Image  src={'/data/img/'+ imgurl} alt=''/>
				</div>
				<div className="product-card__content">
					<div className="product-card__size">
						<Image  src={sizeimg} alt='sizeimg'/>
						<span>{sizevalue} {sizetype}</span>
					</div>
					<div  className='product-card__title'>
						<div>{brand} {title}</div>
					</div>
					<div className='product-card__descText'>
						{description}
					</div>
				</div>
				<div className='product-card__actions'>
					<button className="pruduct-card__btnCountInCart"> - </button>
						<span>1</span>
					<button className="pruduct-card__btns_CountInCart"> + </button>
					<span className='product-card__price'>{price} {currency}</span>
					<Button icon={icons.delete} onClick={()=>handleClickRemoveCart(product)} style={{width: 60} } />
				</div>
			</div>
		);
	};

  let productCard = null;
  switch (variant) {
    case "productPage":
      productCard = renderProductPageVariant();
      break;
    case "catalog":
      productCard = renderCatalogVariant();
      break;
    default:
		productCard = renderCartVariant();
		break;
  }

  return productCard;
};
export default ProductCard;