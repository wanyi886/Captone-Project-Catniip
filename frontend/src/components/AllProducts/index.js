import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useHistory } from 'react-router-dom'
import './AllProducts.css';
import { loadProductsPage } from "../../store/products"
import ProductsDisplay from "../ProductsDisplay/ProductsDisplay";


function AllProducts() {
  const dispatch = useDispatch()
  const productsStateData = useSelector(state => state.productsState)
  const products = Object.values(productsStateData)

  const cartData = useSelector(state => state.cart);
  const cartArray = Object.values(cartData)

  useEffect(() => {
    dispatch(loadProductsPage())
  }, [dispatch])

  return (
    <div className="products-page-body">
      <h1 className="all-products-h1">All Products</h1>
      <ProductsDisplay products={products} cartArray={cartArray}/>
    </div>
  )
}

export default AllProducts;
