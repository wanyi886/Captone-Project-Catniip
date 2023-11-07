

function DisplayStars({score}) {

    function getStars(score) {
        const fullStar = <i className="fa fa-star"></i>;
        const halfStar = <i className="fas fa-star-half-alt"></i>;
        const emptyStar = <i className="fa-regular fa-star"></i>;
      
        const starsArray = [];
        const fullStars = Math.floor(score);
        const hasHalfStar = score % 1 !== 0;
      
        for (let i = 0; i < 5; i++) {
          if (i < fullStars) {
            starsArray.push(fullStar);
          } else if (i === fullStars && hasHalfStar) {
            starsArray.push(halfStar);
          } else {
            starsArray.push(emptyStar);
          }
        }
      
        return starsArray;

    }

    let stars = getStars(score);

    return (
        stars
    )
    
}

export default DisplayStars

