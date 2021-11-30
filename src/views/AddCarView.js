import { useEffect, useState } from "react";
import { getAllMakers } from "../services/makerService";
import { createCarInApi } from "../services/carService";
import "./AddCarView.css";

function AddCarView() {
  const [makers, setMakers] = useState([]);
  const [car, setCar] = useState({
    name: "",
    maker: "",
    year: 0,
    miles: 0,
    engine: "",
    doors: 0,
    bodyStyle: "",
    price: 0,
    description: "",
    image: "",
    contact: "",
  });

  useEffect(() => {
    getMakers();
  }, []);

  const getMakers = async () => {
    const res = await getAllMakers();
    setMakers(res.data);
  };

  const handleChange = (event) => {
    setCar({
      ...car,
      [event.target.name]: event.target.value,
    });
  };

  const handleImage = (event) => {
    const imageToUpload = event.target.files[0];
    setCar({ ...car, image: imageToUpload });
  };

  const handleSubmit = (event) => {
    console.log(car);
    event.preventDefault();
    createCarInApi(car);
  };
  return (
    <div className="addCarView">
      <div className="container">
        <form className="form">
          <h2>Create new listing</h2>
          <label htmlFor="name">Model name:</label>
          <input
            name="name"
            onChange={handleChange}
            placeholder="name"
            type="text"
            className="form-control"
            id="name"
            value={car.name}
          />
          <label htmlFor="maker">Maker:</label>
          <select
            onChange={handleChange}
            defaultValue={"Choose Maker"}
            className="form-control"
            name="maker"
            id="maker"
          >
            <option disabled value="Choose Maker">
              Choose Maker
            </option>
            {makers.map((maker) => (
              <option key={maker._id} value={maker._id}>
                {maker.name}
              </option>
            ))}
          </select>
          <label htmlFor="body">Body style:</label>
          <select
            onChange={handleChange}
            defaultValue={"body"}
            className="form-control"
            name="bodyStyle"
            id="body"
          >
            <option disabled value="body">
              Select body style
            </option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Compact">Compact</option>
            <option value="Wagon">Wagon</option>
            <option value="Coupe">Coupe</option>
            <option value="Van">Van</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Pickup">Pickup</option>
            <option value="Sport coupe">Sport coupe</option>
          </select>
          <label htmlFor="year">Year:</label>
          <input
            id="year"
            type="number"
            name="year"
            className="form-control"
            onChange={handleChange}
            placeholder="year"
            value={car.year}
          />
          <label htmlFor="miles">Miles:</label>
          <input
            id="miles"
            type="number"
            name="miles"
            className="form-control"
            onChange={handleChange}
            placeholder="miles"
            value={car.miles}
          />
          <label htmlFor="engine">Engine type:</label>
          <input
            id="engine"
            type="text"
            name="engine"
            className="form-control"
            onChange={handleChange}
            placeholder="engine"
            value={car.engine}
          />
          <label htmlFor="doors">Doors:</label>
          <input
            id="doors"
            type="number"
            name="doors"
            className="form-control"
            onChange={handleChange}
            placeholder="doors"
            value={car.doors}
          />
          <label htmlFor="image">Photo:</label>
          {/* <input
            id="image"
            type="text"
            name="image"
            className="form-control"
            onChange={handleChange}
            placeholder="image"
            value={car.image}
          /> */}
          <input
            id="image"
            type="file"
            name="image"
            className="form-control"
            onChange={handleImage}
            placeholder="image"
            accept="image/*"
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            type="text"
            name="description"
            className="form-control"
            onChange={handleChange}
            placeholder="description"
            rows="10"
            value={car.description}
          />
          <label htmlFor="contact">Contact Information:</label>
          <textarea
            id="contact"
            type="text"
            name="contact"
            className="form-control"
            onChange={handleChange}
            placeholder="contact info"
            rows="10"
            value={car.contact}
          />
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            type="number"
            name="price"
            className="form-control"
            onChange={handleChange}
            placeholder="price"
            value={car.price}
          />
          <button onClick={handleSubmit} className="form-control">
            Create New Listing
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddCarView;
