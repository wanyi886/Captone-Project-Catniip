import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadOneProduct } from '../../store/products'

import './ProductDetail.css';

function ProductDetail () {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadOneProduct(id))
  }, [dispatch])

  const productPageData = useSelector(state => state.productsState)
  // console.log("productPageData", productPageData)
  const product = productPageData[id];
  // console.log("product from pagestate", product)

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
      </div>
    </div>
  )
}

export default ProductDetail;
