import "../styles/order-summary.css";

import { useEffect, useState } from "react";
import useCartStore from "../hooks/cartStore";

const OrderSummary = () => {
  const [items, setItems] = useState(0);
  const [total, setTotal] = useState(0);
  const cart = useCartStore((state) => state.cart);
  const shippingCharges = 15;

  console.log(cart);

  useEffect(() => {
    setItems(cart.length);
  }, [cart.length])

  useEffect(() => {
    let totalPrice = 0;

    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    })

    // parseInt(totalPrice.toFixed(4));

    setTotal(totalPrice);
  }, [cart])

  return (
    <div className="order-summary">
      <h1>Order Summary</h1>
      <p>{"Items: " + items}</p>
      <p>{ "Shipping: $" + shippingCharges }</p>
      <p class="total">{"Total: $" + total}</p>
    </div>
  );
}
 
export default OrderSummary;