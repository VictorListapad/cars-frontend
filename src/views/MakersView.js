import { useState, useEffect } from "react";
import axios from "axios";
import { deleteMakerInApi } from "../services/makerService";
import "./MakersView.css";

const MakersView = () => {
  const [makers, setMakers] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getMakers();
  }, []);

  const getMakers = async () => {
    const res = await axios.get(
      `https://boiling-citadel-13895.herokuapp.com/api/v1/makers`
    );
    setMakers(res.data);
  };

  const deleteMaker = (id) => {
    const filteredList = makers.filter((maker) => maker._id !== id);
    deleteMakerInApi(id);
    setMakers(filteredList);
  };

  return (
    <div className="makers-container">
      <table>
        <thead>
          <tr>
            <th>Maker</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {makers.map((maker, index) => (
            <tr key={index}>
              <td>{maker.name}</td>
              <td>{maker.location}</td>
              <td>
                <button onClick={() => deleteMaker(maker._id)}>
                  Delete Maker
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MakersView;
