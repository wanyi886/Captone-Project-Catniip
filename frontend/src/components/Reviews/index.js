import './Reviews.css';

function Reviews ({reviews}) {


  function getStars (score) {
    let stars;
    if (score === 1) {
      stars = (
      <>
        <i class="fa fa-star" ></i>
        <i class="fa-regular fa-star"></i>
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
    } else {
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




  return (
    <div className="reviews-area">
        <h1 className="review-h1">Reviews</h1>
        {reviews?.length < 1?
          ( <div className="no-review">No Reviews for this product now</div> ) :
          ( <div className="reviews-outter-container">
            {reviews?.map(review => (
              <div key={review.id} className="review-container">
                <div >{review.User.username}</div>
                <div className="ratings-container">
                  {/* <div>Score: {review.score}</div> */}
                  {getStars(review.score)}
                </div>
                <div className="img-description-area">
                  <div className="review-img-container">
                    <img src={review.imgUrl}></img>
                  </div>
                  <div>
                    <div className='rating-date'>{new Date(review.updatedAt).toDateString()}</div>
                    <div className='review-description'>{review.description}</div>
                  </div>
                </div>
              </div>
            ))}
            </div>
          )
        }
      </div>
  )

}

export default Reviews;
