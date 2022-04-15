import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import './AllProducts.css';
import { loadProductsPage } from "../../store/products"
import { addToCart } from '../../store/cart'


function AllProducts() {
  const dispatch = useDispatch()
  const history = useHistory()
  const productsStateData = useSelector(state => state.productsState)
  // console.log("productsStateData", productsStateData)

  const products = Object.values(productsStateData)
  // console.log("products", products)
  // console.log("product reversed", products.reverse())

  useEffect(() => {
    dispatch(loadProductsPage())
  }, [dispatch])

  const handleAddCart = async (e) => {

    await dispatch(addToCart(e.target.id))
    history.push('/cart')
  }

  return (
    <>
    <h1>All Products</h1>
      <div className="products-container">
      {products.map((product) => (
        <div className="product-container" key={product.id}  >
          <Link to={`/products/${product?.id}/detail`} style={{ textDecoration: 'none' }}>
            <div className="product-picture">
              {/* <img src={`${product?.imgUrl}`}/> */}
              Product {product?.id}:
            </div>
            <div className="product-title">
              {product?.title}
            </div>
            <div className="product-des">
              {product?.description}
            </div>
            <div className="product-price">
              {product?.price}
            </div>
          </Link>
          <button onClick={(e) => handleAddCart(e)} id={product.id} className="add-to-cart-button">
            <i class="fa-solid fa-cart-plus"></i>
            Add to Cart
          </button>

        </div>
      ))}

      </div>
    </>
  )
}

export default AllProducts;
