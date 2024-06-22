import "../styles/checkout-form.css";
import { useFormik } from "formik";
import { useEffect } from "react";
import { checkoutFormSchema } from "../form-schemas/checkout-form-schema";
import Message from "./Message";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import useCartStore from "../hooks/cartStore";

const CheckoutForm = ({ isSubmitted, setIsSubmitted }) => {
  const clearCart = useCartStore((state) => state.clearCart);

  const onSubmit = (values, actions) => {
    actions.resetForm();
    setIsSubmitted(true);
    clearCart();
  }

  const { values, errors, handleChange, handleBlur, handleSubmit, touched, isSubmitting } = useFormik({
    initialValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      country: "",
      cardNo: "",
      cvv: "",
      expiryDate: "",
    },
    validationSchema: checkoutFormSchema,
    onSubmit: onSubmit,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="checkout-form">
      <h1>Checkout</h1>
      { 
        isSubmitted &&
        <p style={{"textAlign": "center"}}>Your order has been placed successfully!</p>
      }
      {
        isSubmitted && 
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      }
      {isSubmitted || <form onSubmit={handleSubmit} autoComplete="off" className={isSubmitting? "disabled":""}>
        <p className="title">Personal Information</p>
        <div className="field">
          <label>Name:</label>
          <input type="text" id="name" className={ errors.name && touched.name? "input-error":"" } value={values.name} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your Name" />
        </div>  
        { errors.name && touched.name? <p className="error-message">{errors.name}</p>:"" }
        <div className="field">
          <label>Email:</label>
          <input type="email" id="email" className={ errors.email && touched.email? "input-error":"" } value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your Email" />
        </div>
        { errors.email && touched.email? <p className="error-message">{errors.email}</p>:"" }

        <p className="title">Shipping Address</p>
        <div className="field">
          <label>Address:</label>
          <input type="text" id="address" className={ errors.address && touched.address? "input-error":"" } value={values.address} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your Address" />
        </div>
        { errors.address && touched.address? <p className="error-message">{errors.address}</p>:"" }
        <div className="field">
          <label>City:</label>
          <input type="text" id="city" className={ errors.city && touched.city? "input-error":"" } value={values.city} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your City" />
        </div>
        { errors.city && touched.city? <p className="error-message">{errors.city}</p>:"" }
        <div className="field">
          <label>Country:</label>
          <input type="text" id="country" className={ errors.country && touched.country? "input-error":"" } value={values.country} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your Country" />
        </div>
        { errors.country && touched.country? <p className="error-message">{errors.country}</p>:"" }

        <p className="title">Payment Information</p>
        <div className="field">
          <label>Card No.:</label>
          <input type="number" id="cardNo" className={ errors.cardNo && touched.cardNo? "input-error":"" } value={values.cardNo} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your Card Number" />
        </div>
        { errors.cardNo && touched.cardNo? <p className="error-message">{errors.cardNo}</p>:"" }
        <div className="field">
          <label>CVV:</label>
          <input type="number" id="cvv" className={ errors.cvv && touched.cvv? "input-error":"" } value={values.cvv} onChange={handleChange} onBlur={handleBlur} placeholder="Enter your CVV (Card Verification Value)" />
        </div>
        { errors.cvv && touched.cvv? <p className="error-message">{errors.cvv}</p>:"" }
        <div className="field">
          <label>Expiry Date:</label>
          <input type="date" id="expiryDate" className={ errors.expiryDate && touched.expiryDate? "input-error":"" } value={values.expiryDate} onChange={handleChange} onBlur={handleBlur} />
        </div>
        { errors.expiryDate && touched.expiryDate? <p className="error-message">{errors.expiryDate}</p>:"" }
        <button disabled={ isSubmitting } className={ isSubmitting? "disabled":"" } type="submit">Place Order</button>
      </form>}
      { isSubmitted && <Message message="Form Submitted!" color="green" /> }
    </div>
  );
}
 
export default CheckoutForm;