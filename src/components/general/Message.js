import "../../styles/general/message.css";

import { useEffect, useRef } from "react";

const Message = (props) => {
  const msg = useRef();

  useEffect(() => {
    msg.current.style.top = "1%";
  
    let timeoutId = setTimeout(() => {
      msg.current.style.top = "-50%";
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, []);

  return (
    <div ref={ msg } className="message" style={{"backgroundColor": `${props.color}`}}>
      <p>{ props.message }</p>
    </div>
  );
}
 
export default Message;