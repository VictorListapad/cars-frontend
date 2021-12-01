import { Outlet } from "react-router";
import { isAuth } from "../services/authService";
import SignInView from "../views/SignInView";

const AdminRoute = () => {
  const user = isAuth();
  return user.role === "ADMIN" ? <Outlet /> : <SignInView />;
};

export default AdminRoute;
