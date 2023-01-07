import { useState } from 'react'
import "./ShopItemCard.css"
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as outlineHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart as solidCart } from '@fortawesome/free-solid-svg-icons'

function ShopItemCard({
    children,
    title,
    category,
    price,
    currency,
    status,
    discount,
    imageSrc,
    onItemClick,
    onLikeClick,
    onCartClick,
    onCategoryClick
}) {
    const [like, setLike] = useState(false);
    const [cart, setCart] = useState(false);

    function handleLikeClick(){
        onLikeClick(!like)
        setLike(!like)
    }

    function handleCartClick(){
        setCart(!cart)
        onCartClick(!cart)
    }

    function handleItemClick(e){
        if (e.target.className === "image")
            onItemClick();
    }

    return (
        <div class="card">
            <div class="image-container">
                <img onClick={e => handleItemClick(e)} class="image" src={imageSrc} alt={title}/>

                <div class="icon-container like-icon" 
                    onClick={handleLikeClick}>
                    <FontAwesomeIcon style={{fontSize: '1.75rem', color: "#ff3b38"}} icon={like ? solidHeart : outlineHeart} />
                </div>

                <div class="icon-container cart-icon" 
                    onClick={handleCartClick}>
                    <FontAwesomeIcon style={{fontSize: '1.6rem', color: cart?'black':'grey'}} icon={solidCart} />
                </div>

                {status ? <div class="status">{status}</div> : null}
                {discount ? <div class="discount">-{discount}%</div> : null}
            </div>

            <p class="title">{title}</p>
            {category ? <p class="category" onClick={onCategoryClick}>{category}</p> :null}

            <div>
                {discount ? <p class="old-price">{currency} {price} {' '}{' '} </p> : null}
                <p class="current-price">
                    {currency} {discount ? price * discount / 100 : price}
                </p>
            </div>

            <div style={{display: 'inline', padding: '5px'}}>
            {children}
            </div>
        </div>
    )
}

ShopItemCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string,
    status: PropTypes.string,
    discount: PropTypes.number,
    imageSrc: PropTypes.string.isRequired,
    onItemClick: PropTypes.func.isRequired,
    onLikeClick: PropTypes.func.isRequired,
    onCartClick: PropTypes.func.isRequired,
    onCategoryClick: PropTypes.func
}

export default ShopItemCard