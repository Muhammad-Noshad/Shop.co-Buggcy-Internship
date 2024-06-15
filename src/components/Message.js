import "../styles/message.css";

const Message = (props) => {
  
  return (
    <div ref={ props.msg } className="message" style={{"backgroundColor": `${props.color}`}}>
      <p>{ props.message }</p>
    </div>
  );
}
 
export default Message;