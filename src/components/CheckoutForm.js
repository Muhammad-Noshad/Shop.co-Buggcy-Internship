import "../styles/checkout-form.css";

const CheckoutForm = () => {
  return (
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
        <button>Place Order</button>
      </form>
    </div>
  );
}
 
export default CheckoutForm;