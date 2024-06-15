import "../styles/counter.css";

const Counter = (props) => {
  function incCount(){
    props.setCount(props.count + 1);
  }

  function decCount(){
    if(props.count > 1)
      props.setCount(props.count - 1);
  }

  return (
    <div className="counter">
      <button className="inc-btn" onClick={ incCount } > + </button>
      <p>{ props.count }</p>
      <button className="dec-btn" onClick={ decCount } > - </button>
    </div>
  );
}
 
export default Counter;