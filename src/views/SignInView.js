import { useState } from "react";
import { useNavigate } from "react-router";
import { signUserToApi } from "../services/authService";
import "./SignView.css";

const SignInView = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const userResponse = await signUserToApi(user);
      navigate("/");
      console.log("Signed in");
      window.location.reload();
    } catch (error) {
      console.log("Couldn't login");
    }

    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <div className="signForm">
      <h1>Log in</h1>
      <form>
        <label htmlFor="email">Your email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={user.email}
          placeholder="Enter your email"
          className="form-control"
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          className="form-control"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="form-control">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInView;
