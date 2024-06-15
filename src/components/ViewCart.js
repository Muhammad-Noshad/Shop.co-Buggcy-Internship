import "../styles/view-cart.css";

import useCartStore from "../hooks/cartStore";
import CartCard from "./CartCard";
import OrderSummary from "./OrderSummary";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ViewCart = () => {
  const cart = useCartStore((state) => state.cart);
  
  return (
    <div className="view-cart container">
      <h1>Your Cart</h1>
      <div className="wrapper">
        <OrderSummary />
        <div className="cart-items">
          {
            cart.map((item) => {
              return (   
                <CartCard product={item}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
 
export default ViewCart;