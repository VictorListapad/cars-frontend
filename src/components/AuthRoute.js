import { Outlet } from "react-router";
import { isAuth } from "../services/authService";
import SignInView from "../views/SignInView";

const AuthRoute = () => {
  const user = isAuth();

  return user ? <Outlet /> : <SignInView />;
};

export default AuthRoute;
