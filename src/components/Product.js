import React from 'react'
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider';

function Product({ id, title, price, rating, image }) {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        // Adding item to basket
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
            },
        });
    }

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            <StarIcon className="product__ratingIcon" />
                        ))
                    }
                </div>
            </div>
            <img
                src={image}
                alt="Product"
            />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
