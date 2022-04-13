import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import './AllProducts.css';
import { loadProductsPage } from "../../store/products"


function AllProducts() {
  const dispatch = useDispatch()
  const productsStateData = useSelector(state => state.productsState)
  console.log("productsStateData!!!!!", productsStateData)

  useEffect(() => {
    dispatch(loadProductsPage())
  }, [dispatch])


  return (
    <>
    <h1>All Products</h1>
    </>
  )
}

export default AllProducts;
