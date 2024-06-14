import "../styles/view-cart.css";

import useCartStore from "../hooks/cartStore";
import CartCard from "./CartCard";
import OrderSummary from "./OrderSummary";

const ViewCart = (props) => {
  const cart = useCartStore((state) => state.cart);
  
  return (
    <div className="view-cart container">
      <h1>Your Cart</h1>
      <div className="wrapper">
        <OrderSummary />
        <div className="cart-items">
          {
            cart.map((item) => {
              return <CartCard key={item.id}  product={item}/>
            })
          }
        </div>
      </div>
    </div>
  );
}
 
export default ViewCart;