import React from 'react'
import { Rating } from '@mui/material'
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat'
import classes from "./product.module.css"


const ProductCard = ({ product }) => {
    const { title, image, price, rating,id } = product
  return (
    <div className={`${classes.card_container}`}>
        <a href="">
        <img src={image} alt={title} />
        </a>
        <div>
            <h3>{title}</h3>
            <div className={classes.rating}>
                {/* rating */}
                <Rating value={rating.rate} precision={0.1} />
                {/* count */}
                <small>{rating.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price} />
            </div>

            <button className={classes.button}>Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard