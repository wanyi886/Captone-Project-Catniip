

function DisplayStars({score}) {

    function getStars(score) {
      
        const starsArray = [];
        const fullStars = Math.floor(score);
        const hasHalfStar = score % 1 !== 0;
      
        for (let i = 0; i < 5; i++) {
          if (i < fullStars) {
            starsArray.push(<i key={i} className="fa fa-star"></i>);
          } else if (i === fullStars && hasHalfStar) {
            starsArray.push(<i key={i} className="fas fa-star-half-alt"></i>);
          } else {
            starsArray.push(<i key={i} className="fa-regular fa-star"></i>);
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

