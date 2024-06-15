import "../styles/cart-card.css";

import Rating from "./Rating";
import Counter from "./Counter";
import { useEffect, useState } from "react";
import useCartStore from "../hooks/cartStore";
// $435.84000000000003
const CartCard = (props) => {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const [count, setCount] = useState(props.product.quantity);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    updateQuantity(props.product, count);
    console.log(cart);
  }, [count]);

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
        <p className="price">${props.product.price.toFixed(2)}</p>
        <div className="util-section">
          <Counter count={ count } setCount={ setCount } />
          <div className="delete" onClick={() => { removeFromCart(props.product) }}>
            <img src={require("../images/delete.png")} alt="delete.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default CartCard;