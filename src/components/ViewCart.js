import "../styles/view-cart.css";

import useCartStore from "../hooks/cartStore";
import CartCard from "./CartCard";

const ViewCart = (props) => {
  const cart = props.products;

  return (
    <div className="view-cart container">
      <h1>Your Cart</h1>
      {
        cart.map((item) => {
          return <CartCard key={item.id}  product={item}/>
        })
      }
    </div>
  );
}
 
export default ViewCart;