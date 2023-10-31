import './Reviews.css';
import ReviewsSum from './ReviewsSum'

function Reviews ({reviews}) {


  function getStars (score) {
    let stars;
    if (score <= 1) {
      stars = (
      <>
        <i class="fa fa-star" ></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </>
      )
    } else if (score > 1 && score < 2) {
      stars = (
        <>
          <i class="fa fa-star" ></i>
          <i class="fas fa-star-half-alt"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </>
      )

    } else if (score === 2) {
      stars = (
        <>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </>
      )
    } else if (score > 2 && score < 3) {
      stars = (
        <>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fas fa-star-half-alt"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </>
      )

    } else if (score === 3) {
      stars = (
        <>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </>
      )
    } else if (score > 3 && score < 4) {
      stars = (
        <>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fas fa-star-half-alt"></i>
          <i class="fa-regular fa-star"></i>
        </>
      )

    } else if (score === 4) {
      stars = (
        <>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa-regular fa-star"></i>
        </>
      )
    } else if (score > 4 && score < 5) {
      stars = (
        <>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fas fa-star-half-alt"></i>
        </>
      )

    }
    else {
      stars = (
        <>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
          <i class="fa fa-star" ></i>
        </>
      )
    }
    return stars
  }

  const getAverage = (reviews) => {
    if (reviews.length === 0) return 0
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
        sum += reviews[i].score
    }
    return sum/ reviews.length;
  }

  // const average = getAverage(reviews)


  return (
    <div className="reviews-area">
        <h1 className="review-h1">Reviews</h1>
        
        {reviews?.length > 0?
          ( <div className="reviews-outter-container">
            {/* <ReviewsSum reviews={reviews} /> */}
            <div>{getAverage(reviews).toFixed(1)}</div>
            <div>{getStars(getAverage(reviews))}</div>
            <div>{reviews.length} Ratings</div>
            {reviews?.map(review => (
              <div key={review.id} className="review-container">
                <div >{review.User.username}</div>
                <div className='rating-date'>{new Date(review.updatedAt).toDateString()}</div>
                <div className="ratings-container">
                  {getStars(review.score)}
                </div>
                <div className="img-description-area">
                  <div className="review-img-container">
                    <img src={review.imgUrl}></img>
                  </div>
                  <div className='review-description'>{review.description}</div>
                </div>
              </div>
            ))}
            </div>
          )
          :
          ( <div className="no-review">No Reviews for this product now</div> )
        }
      </div>
  )

}

export default Reviews;
