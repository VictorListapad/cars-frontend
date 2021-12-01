import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL;
import { deleteUserInApi } from "../services/authService";

// import "./MakersView.css";
const UsersListView = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const res = await axios.get(
      `https://boiling-citadel-13895.herokuapp.com/api/v1/auth`
    );
    setUsers(res.data);
  };
  const deleteUser = (id) => {
    const filteredList = users.filter((user) => user._id !== id);
    deleteUserInApi(id);
    setUsers(filteredList);
  };

  return (
    <div className="makers-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            {/* <th>Update</th> */}
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              {/* <td>
                <Link to={`/updateUser/${id}`}>Update</Link>
              </td> */}
              <td>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersListView;
