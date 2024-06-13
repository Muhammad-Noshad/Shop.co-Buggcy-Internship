import "../styles/cart-card.css";

import Rating from "./Rating";
import Counter from "./Counter";
import { useRef } from "react";

const CartCard = (props) => {
  const quantity = useRef();

  return (
    <div className="cart-card">
      <div className="left-section">
        <div className="img">
          <img src={props.product.image} alt="product.png" />
        </div>
      </div>
      <div className="right-section">
        <p className="title">{props.product.title}</p>
        <Rating rating={props.product.rating.rate}/>
        <p className="price">${props.product.price}</p>
        <div className="util-section">
          <Counter quantity={ quantity } />
          <div className="delete">
            <img src={require("../images/delete.png")} alt="delete.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default CartCard;