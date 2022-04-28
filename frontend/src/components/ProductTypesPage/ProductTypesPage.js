import './ProductTypesPage.css'
import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { loadProductsPage } from "../../store/products"
import { useDispatch, useSelector } from 'react-redux';
import ProductsDisplay from '../ProductsDisplay/ProductsDisplay';

function ProductTypesPage () {
  const dispatch = useDispatch()
  const { type } = useParams();
  const productsStateData = useSelector(state => state.productsState);
  const products = Object.values(productsStateData);
  const selectedProducts = products.filter( product => product.type === type)

  const cartData = useSelector(state => state.cart);
  const cartArray = Object.values(cartData)

  useEffect(() => {
    dispatch(loadProductsPage())
  }, [dispatch])


  return (
    <div className='products-page-body'>
      <h1 className="all-products-h1">{type}</h1>
      <ProductsDisplay products={selectedProducts} cartArray={cartArray}/>
    </div>
  )
}

export default ProductTypesPage;
