import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom'
import '../AllProducts/AllProducts.css';
import { loadProductsPage } from "../../store/products"
import { addToCart, updateCount } from '../../store/cart'
// import ProductsDisplay from "../ProductsDisplay/ProductsDisplay";
import DisplayStars from "../Reviews/DisplayStars";


function ProductsDisplay({products, cartArray}) {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleAddCart = async (e) => {

    /* e.target.id sometimes works, sometimes not.
    because it might not clicking actual button with the id.
    Your click is grabbing id from the parent element div.price-and-cart-btn
    instead of its child button.add-to-cart-button.
    */

    // if the item is not in the cart, add this item to cart, if it exists, just add one to the count
    const targetItemInCart = cartArray.find(item => Number(item.id) === Number(e.currentTarget.id));
    const targetItemInProducts = products.find(item => item.id === Number(e.currentTarget.id));

    /*
    when we pass product.id to be the event currentTarget id, it becomes a string, it's different from the id(number) we passed from product detail page
    so when we try to check if there's the targetItem, we can't find the "same" item, so the addToCart will be dispatched again, not updateCount
    it will start counting from 1
    we need to convert the e.currentTarget.id to number right here to prevent the situation
    */

    if (!targetItemInCart) {
      await dispatch(addToCart(Number(e.currentTarget.id)))
    } else {

      if (targetItemInCart.count + 1 > targetItemInProducts.inventory ) {
        await dispatch(updateCount(Number(e.currentTarget.id), targetItemInCart.count ))
      } else {
        await dispatch(updateCount(Number(e.currentTarget.id), targetItemInCart.count + 1 ))
      }
    }

    history.push('/cart')
  }

  const getAverageScore = (reviews) => {
    let sum = 0;
    for (const review of reviews) {
      sum += review.score;
    }
    return (sum / reviews.length ).toFixed(1)
  }

  return (
    <div className="products-container">
        {products.map((product) => (
          <div className="product-container" key={product?.id}  >
            <Link to={`/products/${product?.id}/detail`} style={{ textDecoration: 'none' }}>
              <div className="product-picture-container">
                <img
                  src = {`${product?.imgUrl}`}
                  onError={(event) => {
                    event.target.src = "/imgs/paw.png";
                    event.onerror = null;
                  }}
                />

              </div>
              <div className="product-info-area">
                <div className="product-title">
                  {product?.title}
                </div>
                {product.Reviews.length <= 0? 
                  <div className="review-average-container">No reviews now </div>
                  :
                  <div className="review-average-container">
                    <DisplayStars score={getAverageScore(product.Reviews)}/>
                    <span className="score-span">{getAverageScore(product.Reviews)}</span>
                  </div>
                }
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
                </div>
              </div>
            </Link>
            <div className="cart-button-area">

            </div>

          </div>
        ))}

    </div>

  )
}

export default ProductsDisplay;
