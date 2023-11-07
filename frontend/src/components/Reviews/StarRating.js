import React, { useState } from 'react';
import { render } from 'react-dom';

function StarRating({ onStarClick, score }) {
    const [selectedStars, setSelectedStars] = useState(score || 0);

    const handleStarClick = (selected) => {
        setSelectedStars(selected);
        onStarClick(selected); // to pass selected value back to parent component
    }

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <i
                  key={i}
                  className={ i <= selectedStars? 'fa fa-star' : 'fa-regular fa-star'}
                  onClick={() => handleStarClick(i)}
                  style={{ cursor: 'pointer', color: 'rgb(255, 170, 0)' }}
                ></i>
            )
        }
        return stars
    }
    const stars = renderStars();

    return <div className='star-rating-container'>{stars}</div>
}

export default StarRating
