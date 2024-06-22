import "../styles/checkout.css";
import { useEffect, useState } from "react";
import OrderSummary from './OrderSummary'
import CheckoutForm from "./CheckoutForm";

const Checkout = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  return (  
    <div className="checkout container">
      {
        isSubmitted ||
        <div className="order">
          <OrderSummary btnText={"Modify Order"} btnPath={"/view-cart"} />
        </div>
      }
      <CheckoutForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
    </div>
  );
}
 
export default Checkout;