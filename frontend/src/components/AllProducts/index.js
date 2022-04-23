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
  const cartData = useSelector(state => state.cart);
  const cartArray = Object.values(cartData)

  useEffect(() => {
    dispatch(loadProductsPage())
  }, [dispatch])

  const handleAddCart = async (e) => {

    /* e.target.id sometimes works, sometimes not.
    because it might not clicking actual button with the id.
    Your click is grabbing id from the parent element div.price-and-cart-btn
    instead of its child button.add-to-cart-button.
    */

    // if the item is not in the cart, add this item to cart, if it exists, just add one to the count
    const targetItem = cartArray.find(item => item.id === e.currentTarget.id)

    if (!targetItem) {
      await dispatch(addToCart(e.currentTarget.id))
    } else {
      if (targetItem.count < products[e.currentTarget.id - 1].inventory) {
        await dispatch(updateCount(e.currentTarget.id, targetItem.count + 1 ))
      }
    }

    history.push('/cart')
  }


  return (
    <div className="products-page-body">
      <h1 className="all-products-h1">All Products</h1>
        <div className="products-container">
        {products.map((product) => (
          <div className="product-container" key={product?.id}  >
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
                  {product?.inventory > 0 ? (
                      <button onClick={handleAddCart} id={product?.id} className="add-to-cart-button">
                        <i class="fa-solid fa-cart-plus"></i>
                      </button>
                    ) : (
                      <p className="all-product-out-of-stock">Out of Stock</p>
                    )
                  }
                  {/* // <button onClick={handleAddCart} id={product?.id} className="add-to-cart-button">
                  //   <i class="fa-solid fa-cart-plus"></i>
                  // </button> */}
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
