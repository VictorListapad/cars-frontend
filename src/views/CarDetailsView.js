import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { getOneCarFromApi } from "../services/carService";
import "./CarDetailsView.css";
const notFoundImg =
  "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png";
const CarDetailsView = () => {
  const [car, setCar] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getOneCar();
  }, []);

  const getOneCar = async () => {
    const res = await getOneCarFromApi(id);
    setCar(res.data);
  };

  return (
    <div className="infoPage">
      <div className="detailImgContainer">
        <img src={car.image ? car.image : notFoundImg} alt="car" />
      </div>
      <div className="infoContainer">
        <h1>{car.name}</h1>
        <hr />
        <p>
          <b>Maker:</b> {car.maker?.name}
        </p>
        <hr />
        <p>
          <b>Year:</b> {car.year}
        </p>
        <hr />
        <p>Mileage: {car.miles} miles</p>
        <hr />
        <p>Engine: {car.engine}</p>
        <hr />
        <p>Doors: {car.doors}</p>
        <hr />
        <p className="description">Description: {car.description}</p>
        <hr />
        <p>Price: {car.price}$</p>
        <hr />
        <p>Contact information: {car.contact}</p>
      </div>
    </div>
  );
};

export default CarDetailsView;
