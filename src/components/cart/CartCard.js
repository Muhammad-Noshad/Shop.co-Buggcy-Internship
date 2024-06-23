import "../../styles/cart/cart-card.css";

import { useEffect, useState, useCallback } from "react";
import useCartStore from "../../hooks/cartStore";

import Rating from "../general/Rating";
import Counter from "../general/Counter";

const CartCard = (props) => {
  const [count, setCount] = useState(props.product.quantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  let cart = useCartStore((state) => state.cart);

  const removeProduct = useCallback(() => {
    removeFromCart(props.product);
    
    props.setIsProductRemoved(true);
    setTimeout(() => {
      props.setIsProductRemoved(false);
    }, 1200);
    
    let cart = useCartStore.getState().cart;
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [])

  useEffect(() => {
    updateQuantity(props.product, count);
  }, [count])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart])

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
          <div className="delete" onClick={removeProduct}>
            <img src={require("../../images/delete.png")} alt="delete.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default CartCard;