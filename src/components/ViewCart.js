import "../styles/view-cart.css";

import useCartStore from "../hooks/cartStore";
import CartCard from "./CartCard";
import OrderSummary from "./OrderSummary";
import Message from "./Message";
import { useRef, useEffect } from "react";

const ViewCart = () => {
  const cart = useCartStore((state) => state.cart);
  const msg = useRef();
  let timeoutId;

  function showMessage(){
    if(timeoutId){
      clearTimeout(timeoutId);
    }

    msg.current.style.top = "1%";

    timeoutId = setTimeout(() => {
      msg.current.style.top = "-50%";
    }, 2000);
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant"});
  }, []);
  
  return (
    <div className="view-cart container">
      <Message msg={ msg } message={ "Product removed successfully!" } color={ "green" } />
      <h1>Your Cart</h1>
      <div className="wrapper">
        <OrderSummary />
        <div className="cart-items">
          {
            cart.map((item) => {
              return (   
                <CartCard key={item.id} product={item} showMessage={showMessage} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
 
export default ViewCart;