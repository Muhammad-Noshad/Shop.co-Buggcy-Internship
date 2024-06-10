import "../styles/rating.css";

import filledStar from "../images/filled-star.png";
import halfFilledStar from "../images/half-filled-star.png";

const Rating = (props) => {
  let stars = null;
  
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
        return <img src={star} alt="star.png" />
      })}
    </div>
    <p>{ props.rating + "/5" }</p>
    </div>
  );
}
 
export default Rating;