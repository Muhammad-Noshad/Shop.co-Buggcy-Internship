import "../styles/counter.css";

import { useState } from "react";

const Counter = () => {
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
      <button className="inc-btn" style={{"padding": "0.25rem 2rem"}} onClick={ incCount } > + </button>
      <p>{ count }</p>
      <button className="dec-btn" style={{"padding": "0.25rem 2rem"}} onClick={ decCount } > - </button>
    </div>
  );
}
 
export default Counter;