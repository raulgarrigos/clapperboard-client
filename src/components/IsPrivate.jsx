import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";

function IsPrivate(props) {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return props.children;
  } else {
    // React no nos permite usar navigate()
    return <Navigate to={"/login"} />;
  }
}

export default IsPrivate;
