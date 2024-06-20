import "../styles/checkout.css";
import { useEffect } from "react";
import OrderSummary from './OrderSummary'

const Checkout = () => {
  useEffect(() => window.scrollTo({ top: 0, behavior: "instant" }), []);

  return (  
    <div className="checkout container">
      <div className="order">
        <OrderSummary btnText={"Modify Order"} btnPath={"/view-cart"} />
      </div>
      <div className="checkout-form">
        <h1>Checkout</h1>
        <form>
          <p className="title">Personal Information</p>
          <div className="field">
            <label>Name:</label>
            <input type="text" placeholder="Enter your Name" required />
          </div>  
          <div className="field">
            <label>Email:</label>
            <input type="email" placeholder="Enter your Email" required />
          </div>
          
          <p className="title">Shipping Address</p>
          <div className="field">
            <label>Address:</label>
            <input type="text" placeholder="Enter your Address" required />
          </div>
          <div className="field">
            <label>City:</label>
            <input type="text" placeholder="Enter your City" required />
          </div>
          <div className="field">
            <label>Country:</label>
            <input type="text" placeholder="Enter your Country" required />
          </div>

          <p className="title">Payment Information</p>
          <div className="field">
            <label>Card No.:</label>
            <input type="number" placeholder="Enter your Card Number" required />
          </div>
          <div className="field">
            <label>CVV:</label>
            <input type="number" placeholder="Enter your CVV (Card Verification Value)" required />
          </div>
          <div className="field">
            <label>Expiry Date:</label>
            <input type="date" required />
          </div>
        </form>
        <button>Place Order</button>
      </div>
    </div>
  );
}
 
export default Checkout;