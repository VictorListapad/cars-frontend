// import { useEffect, useState } from "react";
// import { useParams, Navigate } from "react-router";
// import { getOneUserFromApi, updateUserInApi } from "../services/authService";

// const UpdateUserView = () => {
//   const [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const { id } = useParams();

//   useEffect(() => {
//     getUser();
//   }, []);
//   const getUser = async () => {
//     const res = await getOneUserFromApi(id);
//     setUser(res.data);
//     console.log(user);
//   };

//   const handleChange = (event) => {
//     setUser({
//       ...user,
//       [event.target.name]: event.target.value,
//     });
//     console.log(user);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const res = await updateUserInApi(user);
//     getUser();
//   };
//   return (
//     <div className="signForm">
//       <h1>Update user</h1>
//       <form>
//         <label htmlFor="name">Name:</label>
//         <input
//           id="name"
//           type="name"
//           name="name"
//           value={user.name}
//           placeholder="Enter new name"
//           className="form-control"
//           onChange={handleChange}
//         />
//         <label htmlFor="email">Email:</label>
//         <input
//           id="email"
//           type="email"
//           name="email"
//           value={user.email}
//           placeholder="Enter new email"
//           className="form-control"
//           onChange={handleChange}
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           id="password"
//           type="password"
//           name="password"
//           value={user.password}
//           placeholder="Enter new password"
//           className="form-control"
//           onChange={handleChange}
//         />
//         <label htmlFor="role">Role:</label>
//         <select
//           onChange={handleChange}
//           defaultValue={"role"}
//           className="form-control"
//           name="role"
//           id="role"
//         >
//           <option disabled value="role">
//             Select role
//           </option>
//           <option value="ADMIN">ADMIN</option>
//           <option value="USER">USER</option>
//         </select>
//         <button onClick={handleSubmit} className="form-control">
//           Update
//         </button>
//       </form>
//     </div>
//   );
// };

// export default UpdateUserView;
