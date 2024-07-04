import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useIsAuthorized from "./isAuthorized";

export const useAuthorizationRedirect = () => {
  const isAuthorized = useIsAuthorized((state) => state.isAuthorized);
  const history = useHistory();

  useEffect(() => {
    if (!isAuthorized) {
      history.push("/sign-in");
    }
  }, [isAuthorized, history]);
};

export default useAuthorizationRedirect;