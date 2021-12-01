import React from "react";
import "./CarCard.css";
import { Link } from "react-router-dom";
const notFoundImg =
  "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png";

const CarCard = (props) => {
  const { car } = props;
  return (
    <div className="carCard">
      <img src={car.image ? car.image : notFoundImg} alt="car" />
      <h5>
        {car.maker?.name} {car.name}
      </h5>
      <p>Year: {car.year}</p>
      <p>Miles: {car.miles}</p>
      <p>Engine: {car.engine}</p>
      <p>Price: {car.price}$</p>
      <Link className="detailsBtn" to={`/car/${car._id}`}>
        Details
      </Link>
    </div>
  );
};

export default CarCard;
