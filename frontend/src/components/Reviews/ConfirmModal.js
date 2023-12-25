import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { removeOneReview } from '../../store/reviews';
import Cookies from 'js-cookie';

function ConfirmModal({ review, hideModal }) {
    const dispatch = useDispatch();
    const deleteHandler = async () => {
        dispatch(removeOneReview(review))
    
      hideModal()
    }

    return (
        <div className='confirm-modal'>
            <div className='h1-container'>
                <h1 className='delete-review-h1'>Delete the Review</h1>
            </div>
            <div className='p-container'>
                <p className='delete-review-p'>Are you sure about deleting this review?</p>
            </div>
            <div className='delete-review-btn-area'>
                <button onClick={deleteHandler} className='submit'>Yes</button>
                <button onClick={hideModal} className="cancel">Cancel</button>
            </div>
        </div>

    )

}

export default ConfirmModal