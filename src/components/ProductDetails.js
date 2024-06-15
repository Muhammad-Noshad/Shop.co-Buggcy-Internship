import "../styles/product-details.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCartStore from "../hooks/cartStore"
import Counter from "./Counter";

import Rating from "./Rating";

const ProductDetails = (props) => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  const [count, setCount] = useState(1);
  const { id } = useParams();
  
  let product = props.products.filter((product) => {
    return product.id === parseInt(id);
  });

  [ product ] = [...product];

  function handleClick(){
    addToCart({ ...product, quantity: count });
  }
    
  console.log(cart);

  return (
    <div className="product-details container">
      <div className="left-section">
        <img src={ product.image } alt="product.png" />
      </div>
      <div className="right-section">
        <h1>{ product.title }</h1>
        <Rating rating={ product.rating.rate} />
        <p style={{"fontWeight": "800","fontSize": "2.1rem"}}>${ product.price }</p>
        <p>{ product.description }</p>
        <Counter count={ count } setCount= { setCount }/>
        <button className="add-to-cart-btn" onClick={ handleClick }>Add to Cart</button>
      </div>
    </div>
  );
}
 
export default ProductDetails;