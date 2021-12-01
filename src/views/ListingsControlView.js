import { useState, useEffect } from "react";
import axios from "axios";
import { deleteCarInApi } from "../services/carService";
import "./MakersView.css";

const ListingsControlView = () => {
  const [cars, setCars] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const res = await axios.get(`${apiUrl}/cars`);
    setCars(res.data);
  };

  const deleteCar = (id) => {
    const filteredList = cars.filter((car) => car._id !== id);
    deleteCarInApi(id);
    setCars(filteredList);
  };

  return (
    <div className="makers-container">
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Model</th>
            <th>Maker</th>
            <th>Mileage</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <tr key={index}>
              <td>
                <div>
                  <img
                    src={car.image}
                    alt="car"
                    style={{ maxHeight: "8rem" }}
                  />
                </div>
              </td>
              <td>{car.name}</td>
              <td>{car.maker.name}</td>
              <td>{car.miles}</td>
              <td>{car.price}$</td>
              <td>
                <button onClick={() => deleteCar(car._id)}>
                  Delete Listing
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingsControlView;
