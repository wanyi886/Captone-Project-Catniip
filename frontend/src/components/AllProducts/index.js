import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import './AllProducts.css';
import { loadProductsPage } from "../../store/products"
import { addToCart, updateCount } from '../../store/cart'


function AllProducts() {
  const dispatch = useDispatch()
  const history = useHistory()
  const productsStateData = useSelector(state => state.productsState)
  // console.log("productsStateData", productsStateData)

  const products = Object.values(productsStateData)
  // console.log("products", products)
  // console.log("product reversed", products.reverse())
  const cartData = useSelector(state => state.cart);
  const cartArray = Object.values(cartData)

  useEffect(() => {
    dispatch(loadProductsPage())
  }, [dispatch])

  const handleAddCart = async (e) => {
    console.log("e.target.id in the add cart event handler", e.target.id)

    // const targetItem = cartArray.find(item => item.id === e.target.id)

    // if (!targetItem) {
    //   await dispatch(addToCart(e.target.id))
    // } else {
    //   await dispatch(updateCount(e.target.id, targetItem.count + 1 ))
    // }
    await dispatch(addToCart(e.target.id))
    history.push('/cart')
  }

  return (
    <div className="products-page-body">
      <h1 className="all-products-h1">All Products</h1>
        <div className="products-container">
        {products.map((product) => (
          <div className="product-container" key={product.id}  >
            <Link to={`/products/${product?.id}/detail`} style={{ textDecoration: 'none' }}>
              <div className="product-picture-container">
                <img src={`${product?.imgUrl}`}/>
              </div>
              <div className="product-info-area">
                <div className="product-title">
                  {product?.title}
                </div>
                <div className="price-and-cart-btn">
                  <div className="product-price">
                    $ {product?.price}
                  </div>
                  <button onClick={(e) => handleAddCart(e)} id={product.id} className="add-to-cart-button">
                    <i class="fa-solid fa-cart-plus"></i>
                    {/* Add to Cart */}
                  </button>
                </div>
              </div>
            </Link>
            <div className="cart-button-area">

            </div>

          </div>
        ))}

        </div>
    </div>
  )
}

export default AllProducts;
