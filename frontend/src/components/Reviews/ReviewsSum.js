import './Reviews.css';


function ReviewsSums ({reviews}){

    const getAverage = (reviews) => {
        let sum = 0;
        for (let i = 0; i < reviews.length; i++) {
            sum += reviews[i].score
        }
        return sum/ reviews.length;
    }

    const test = () => {
        console.log(reviews)
    }

    return (
        <div className='review-container'>
            {/* <h1>review sum section</h1> */}
            <div>{getAverage(reviews)}</div>
            <div>{reviews.length} Ratings</div>

        </div>
    )
}

export default ReviewsSums;