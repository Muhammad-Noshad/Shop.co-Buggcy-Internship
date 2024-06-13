import "../styles/counter.css";

import { useState } from "react";

const Counter = (props) => {
  const [ count, setCount ] = useState(1);

  function incCount(){
    setCount(count + 1);
  }

  function decCount(){
    if(count > 1)
      setCount(count - 1);
  }

  return (
    <div className="counter">
      <button className="inc-btn" onClick={ incCount } > + </button>
      <p ref={ props.quantity }>{ count }</p>
      <button className="dec-btn" onClick={ decCount } > - </button>
    </div>
  );
}
 
export default Counter;