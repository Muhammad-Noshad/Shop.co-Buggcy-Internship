import "../styles/rating.css";

import filledStar from "../images/filled-star.png";
import halfFilledStar from "../images/half-filled-star.png";
import { memo } from "react";

const Rating = (props) => {
  let stars = null;
  let counter = 0;
  
  calculateStars();

  function calculateStars(){
    stars = [];

    for(let x = props.rating; x > 0; x--){
     if(x >= 1){
      stars.push(filledStar);
     }
     else{
      stars.push(halfFilledStar);
     }
    }
  }
  
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
 
export default memo(Rating);