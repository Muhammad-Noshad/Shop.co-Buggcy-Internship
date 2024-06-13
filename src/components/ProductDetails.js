import "../styles/product-details.css";

import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import useCartStore from "../hooks/cartStore"
import Counter from "./Counter";

import Rating from "./Rating";

const ProductDetails = (props) => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);
  const quantity = useRef();

  const { id } = useParams();
  let product;

  if(props.products)
  {
    product = props.products.filter((product) => {
      return product.id === parseInt(id);
    });

    [ product ] = [...product];
  }
  function handleClick(){
    addToCart({ ...product, quantity: parseInt(quantity.current.textContent) });
  }
    
  console.log(cart);

  return (
    <div className="product-details container">
      <div className="left-section">
        <img src={product && product.image} alt="product.png" />
      </div>
      <div className="right-section">
        <h1>{ product && product.title }</h1>
        <Rating rating={ product && product.rating.rate} />
        <p>{ product && product.description }</p>
        <Counter quantity={ quantity }/>
        <button className="add-to-cart-btn" onClick={ handleClick }>Add to Cart</button>
      </div>
    </div>
  );
}
 
export default ProductDetails;