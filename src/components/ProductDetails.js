import "../styles/product-details.css";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Counter from "./Counter";

import Rating from "./Rating";

const ProductDetails = (props) => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  const { id } = useParams();
  let product;

  if(props.products)
  {
    product = props.products.filter((product) => {
      return product.id === parseInt(id);
    });

    [ product ] = [...product];
  }

  return (
    <div className="product-details container">
      <div className="left-section">
        <img src={product && product.image} alt="product.png" />
      </div>
      <div className="right-section">
        <h1>{ product && product.title }</h1>
        <Rating rating={ product && product.rating.rate} />
        <p>{ product && product.description }</p>
        <Counter />
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
 
export default ProductDetails;