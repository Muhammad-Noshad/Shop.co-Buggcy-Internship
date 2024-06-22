import "../styles/product-card.css";
import Rating from "./Rating";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <div className="img">
        <img src={ props.product.image } alt="product.png" />
      </div>
      <p className="title">{ props.product.title }</p>
      <Rating rating={ props.product.rating.rate }/>
      <p className="price">{ '$' + props.product.price.toFixed(2) }</p>
    </div>
  );
}
 
export default ProductCard;