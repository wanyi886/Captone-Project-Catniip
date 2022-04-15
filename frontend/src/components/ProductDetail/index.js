import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { loadOneProduct } from '../../store/products'
import { addToCart, updateCount } from '../../store/cart'


import './ProductDetail.css';

function ProductDetail () {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    dispatch(loadOneProduct(id))
  }, [dispatch])


  const productPageData = useSelector(state => state.productsState)
  const product = productPageData[id];
  const cartData = useSelector(state => state.cart);
  const cartArray = Object.values(cartData)

  const handleClick = async () => {
    const targetItem = cartArray.find(item => item.id === product.id)

    if (!targetItem) {
      await dispatch(addToCart(product.id))
    } else {
      await dispatch(updateCount(product.id, targetItem.count + 1 ))
    }
    history.push('/cart')
  }

  return (
    <div className="product-detial-container">
      <h1>Product Detail</h1>
      <div className="img-container">
        <img src={`${product?.imgUrl}`}/>
      </div>
      <div className="non-image-container">
        <div>Product Id: {product?.id}</div>
        <div>{product?.title}</div>
        <div>{product?.price}</div>
        <div>{product?.description}</div>
        <button onClick={handleClick}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetail;
