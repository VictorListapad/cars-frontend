import { useState } from "react";
import { userSignUp } from "../services/authService";
import "./SignView.css";
const SignUpView = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    userSignUp(user);
    setUser({
      name: "",
      email: "",
      password: "",
    });
    alert("Registered Succesfully");
  };

  return (
    <div className="signForm">
      <h1>Sign Up</h1>
      <form>
        <label htmlFor="name">Your Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={user.name}
          placeholder="Enter your name"
          className="form-control"
          onChange={handleChange}
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpView;
