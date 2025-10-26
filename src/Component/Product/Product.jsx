import React, { useEffect,useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard.jsx'

const Product = () => {
    const [Product, setProduct] = React.useState()
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products') 
        .then((response) => {
            setProduct(response.data)
        })
        .catch((error) => {
            console.error('Error fetching product data:', error)
        })
    }, [])
  return (
    <section>
      {
        Product && Product.map((singleProduct) => (
            <ProductCard product={singleProduct} key={singleProduct.id} />
        ))
      }
    </section>
  )
}

export default Product