import './ProductTypesPage.css'
import React, { useEffect } from "react";
import { Link, useHistory, useParams } from 'react-router-dom'
import { productTypes } from '../AddProductFormModal/ProductTypeList';
import { loadProductsPage } from "../../store/products"
import { useDispatch } from 'react-redux';



function ProductTypesPage () {
  const dispatch = useDispatch()
  const history = useHistory();
  const { type } = useParams()

  console.log(type)

  useEffect(() => {
    dispatch(loadProductsPage())
  }, [dispatch])


  return (
    <div className='product-types-page-body'>
      <h1>{type}</h1>

    </div>
  )
}

export default ProductTypesPage;
