import './MyListing.css'

import React, { useEffect, useState } from 'react';
import paw from '../../images/paw.png'

function ListingItem ({userProduct, index, handleEditClick, handleDeleteClick}) {
  const [imageSource, setImageSource] = useState(null)

  return (
    <>

      <div className='my-product-container'>
      {/* <div className='my-product-id'>Product #{userProduct.id}</div> */}
      <div className='my-product-img-container'>
        <img
          src={userProduct.imgUrl }
          alt="test"
          onError={(event) => {
            console.log("xxxxxxxxxxxxxxx")
            event.target.src = "/imgs/paw.png";
            event.onerror = null;
          }}

        />
      </div>
      <div className='my-product-title-container'>
        <div className='my-product-title'>{userProduct.title}</div>
        {/* <img src={paw}></img> */}

      </div>
      <div className='my-product-price'>Price: {userProduct.price}</div>
      <div className='my-product-inventory'>Inventory: {userProduct.inventory}</div>
      <div className='my-product-sold'>Sold: Coming soon{}</div>
      <div className='my-listing-button-area'>
        <button type="button" className='my-listing-edit' onClick={(e) => handleEditClick(e)} id={index}>
          <i class="fa-solid fa-pen"></i>
          Edit
        </button>
        <button type="button" className='my-listing-delete' onClick={(e) => handleDeleteClick(e)} id={index}>
          <i class="fa-solid fa-trash"></i>
          Delete
        </button>
      </div>
    </div>
    </>
  )
}

export default ListingItem;
