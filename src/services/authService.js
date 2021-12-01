import axios from "axios";
import { useNavigate } from "react-router";
const apiUrl = process.env.REACT_APP_API_URL;
const tokenString = "jwtironcarsproject";

// SIGN IN
export const signUserToApi = async (user) => {
  const res = await axios.post(
    `https://boiling-citadel-13895.herokuapp.com/api/v1/auth/signin`,
    user
  );
  try {
    console.log(res.data);
    if (res.data) {
      console.log(res.data);
      const { _id, role, name } = res.data;
      localStorage.setItem(
        tokenString,
        JSON.stringify({ id: _id, role, name })
      );
    }
  } catch (err) {
    console.log(err);
  }
  console.log("Logged In");
  return res;
};

// SIGN UP
export const userSignUp = async (user) => {
  const res = await axios.post(
    `https://boiling-citadel-13895.herokuapp.com/api/v1/auth/signup`,
    user
  );
  return res;
};

export const isAuth = () => {
  if (typeof window === "undefined") {
    return false;
  }
  if (localStorage.getItem(tokenString)) {
    return JSON.parse(localStorage.getItem(tokenString));
  }
  return false;
};

export const logOut = () => {
  localStorage.removeItem(tokenString);
  const navigate = useNavigate();
  navigate("/");
  window.location.reload();
};

// GET ALL USERS
export const getAllUsers = async () => {
  const res = await axios.get(
    `https://boiling-citadel-13895.herokuapp.com/api/v1/auth`
  );
  return res;
};

// DELETE USER
export const deleteUserInApi = async (id) => {
  const res = await axios.delete(
    `https://boiling-citadel-13895.herokuapp.com/api/v1/auth/user/${id}`
  );
  return res;
};

// UPDATE USER
// export const updateUserInApi = async (obj) => {
//   const res = await axios.put(`${apiUrl}/auth/user/${obj._id}`);
//   alert("Updated!");
//   return res;
// };

// GET ONE USER
// export const getOneUserFromApi = async (id) => {
//   const res = await axios.get(`${apiUrl}/auth/user/${id}`);
//   return res;
// };
