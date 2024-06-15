import { useEffect, useState } from "react";
import "../styles/loading.css";

const Loading = () => {
  const [dots, setDots] = useState('');
  const [intervalId, setIntervalId] = useState();

  useEffect(() => {
    if(intervalId){
      clearInterval(intervalId);
    }

    setIntervalId(setInterval(() => {
      if(dots === "..."){
        setDots("");
      }
      else{
        setDots(dots + ".");
      }
    }, 700))
  }, [dots]);

  return (
    <div className="loading">
      <h1>Loading{ dots }</h1>
    </div>
  );
}
 
export default Loading;