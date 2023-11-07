import React, { useEffect, useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { removeOneReview } from '../../store/reviews';

function ConfirmModal({ reviewId, hideModal }) {
    const dispatch = useDispatch();
    const deleteHandler = () => {
      dispatch(removeOneReview(reviewId))
      hideModal()
    }

    return (
        <div>
            <div className='h1-container'>
                <h2>Are you sure you want to delete this review?</h2>
            </div>
            <div className='button-container'>
                <button onClick={deleteHandler}>Yes, delete it</button>
                <button onClick={hideModal}>Cancel</button>
            </div>
        </div>

    )

}

export default ConfirmModal