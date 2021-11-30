import { useState } from "react";
import { createMakerInApi } from "../services/makerService";
import "./AddMakerView.css";
const AddMakerView = () => {
  const [maker, setMaker] = useState({
    name: "",
    location: "",
  });
  const [makerName, setMakerName] = useState("");
  const [makerLocation, setMakerLocation] = useState("");

  const handleName = (event) => {
    setMakerName(event.target.value);
  };
  const handleLocation = (event) => {
    setMakerLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createMakerInApi({ name: makerName, location: makerLocation });
    setMaker({ name: "", location: "" });
  };

  return (
    <div className="addMakerForm">
      <h1>Create Maker</h1>
      <div className="container">
        <form className="form">
          <input
            onChange={handleName}
            placeholder="Maker's name"
            type="text"
            className="form-control"
          />
          <input
            onChange={handleLocation}
            placeholder="Maker's location"
            type="text"
            className="form-control"
          />
          <button onClick={handleSubmit} className="btn">
            Add Maker
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMakerView;
