import "../styles/checkout.css";
import { useEffect } from "react";
import OrderSummary from './OrderSummary'
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  return (  
    <div className="checkout container">
      <div className="order">
        <OrderSummary btnText={"Modify Order"} btnPath={"/view-cart"} />
      </div>
      <CheckoutForm />
    </div>
  );
}
 
export default Checkout;