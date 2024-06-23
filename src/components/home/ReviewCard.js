import "../../styles/home/review-card.css";

import Rating from "../general/Rating";

const ReviewCard = (props) => {
  return (
    <div className="review-card">
      <Rating rating={ props.rating } />
      <p className="name">{ props.name }</p>
      <p className="content">{ props.content }</p>
    </div>
  );
}
 
export default ReviewCard;