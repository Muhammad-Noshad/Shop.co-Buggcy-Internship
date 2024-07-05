import { useEffect } from "react";
import useUserStore from "./userStore";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";

export const useVerifyToken = () => {
  const setUser = useUserStore((state) => state.setUser);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    async function verifyToken(){
      await axios.get("http://localhost:8000/token/verify", {
        withCredentials: true
      })
      .then((res) => {
        if(res.data.isAuthenticated){
          setUser(res.data.user);
          if(location.pathname === "/sign-in" || location.pathname === "/sign-up")
            history.push("/");
        }
        else{
          history.push("/sign-in");
        }
      })
      .catch((err) => {
        console.log("An error occurred!", err);
      })
    }

    verifyToken();

    // Use abort controller in cleanup function
  }, []);
}