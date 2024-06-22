import "../styles/rating.css";

import filledStar from "../images/filled-star.png";
import halfFilledStar from "../images/half-filled-star.png";

const Rating = (props) => {
  let stars = calculateStars(props.rating);
  let counter = 0;
  
  return (
    <div className="rating">
      <div className="stars">
        {stars.map((star) => {
          return <img key={counter++}  src={star} alt="star.png" />
        })}
      </div>
      <p>{ props.rating + "/5" }</p>
    </div>
  );
}

function calculateStars(rating){
  let stars = [];

  for(let x = rating; x > 0; x--){
   if(x >= 1){
    stars.push(filledStar);
   }
   else{
    stars.push(halfFilledStar);
   }
  }

  return stars;
}
 
export default Rating;