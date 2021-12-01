import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CarCard from "../components/CarCard";
import { Spinner } from "react-bootstrap";
import "./ListingsView.css";

function ListingsView() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getCar();
  }, []);

  const getCar = async () => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const res = await axios.get(
          `https://boiling-citadel-13895.herokuapp.com/api/v1/cars`
        );
        setCars(res.data);
      } catch (error) {
        setEmpty(true);
        console.log(error);
      }
      setLoading(false);
    }, 2000);
  };

  // const getCar = async () => {
  //   setLoading(true);
  //   setTimeout(async () => {
  //     const res = await axios.get(`${apiUrl}/cars`);
  //     setCars(res.data);
  //     setLoading(false);
  //   }, 2000);
  // };

  return (
    <div className="listingsBackground">
      <div>
        <h1>Listings</h1>
      </div>
      {loading && (
        <div>
          <Spinner animation="grow" variant="light" />
        </div>
      )}
      {(!cars || cars.length === 0) && <h1>No Data Found</h1>}
      {/* {empty && <h1>No Data Found</h1>} */}

      <div className="listings">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
}

export default ListingsView;
