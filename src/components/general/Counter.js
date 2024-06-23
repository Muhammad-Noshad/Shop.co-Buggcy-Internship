import "../../styles/general/counter.css";

function incCount(count, setCount){
  setCount((count) => count + 1);
}

function decCount(count, setCount){
  if(count > 1)
    setCount((count) => count - 1);
}

const Counter = (props) => {
  return (
    <div className="counter">
      <button className="inc-btn" onClick={ () => { incCount(props.count, props.setCount )} } > + </button>
      <p>{ props.count }</p>
      <button className="dec-btn" onClick={ () => { decCount(props.count, props.setCount )} } > - </button>
    </div>
  );
}
 
export default Counter;