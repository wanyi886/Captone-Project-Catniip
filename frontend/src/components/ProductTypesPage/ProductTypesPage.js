import './ProductTypesPage.css'
import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { loadProductsPage } from "../../store/products"
import { useDispatch, useSelector } from 'react-redux';
import ProductsDisplay from '../ProductsDisplay/ProductsDisplay';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
      <div className='index'>
        <span className='index-span home'>
        <Link to="/" className='index-link'>Home</Link>
        </span>
        <span className='index-span'>{">"}</span>
        <span className='index-span all-products'>
          <Link to="/products" style={{ textDecoration: 'none' }} className='index-link'>All Products</Link>
        </span>
        <span className='index-span'>{">"}</span>
        <span className='index-span type'>
          <Link to={`/products/${type}/`} className='index-link'>{type}</Link>
        </span>
      </div>
      {/* <h1 className="all-products-h1">{type}</h1> */}
      <ProductsDisplay products={selectedProducts} cartArray={cartArray}/>
    </div>
  )
}

export default ProductTypesPage;
