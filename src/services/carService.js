import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// GET ALL CARS
export const getAllCars = async () => {
  const res = await axios.get(`${apiUrl}/cars`);
  return res;
};

// GET ONE CAR
export const getOneCarFromApi = async (id) => {
  const res = await axios.get(`${apiUrl}/cars/car/${id}`);
  return res;
};

// CREATE A CAR
export const createCarInApi = async (car) => {
  const { image, ...newCar } = car;
  const res = await axios.post(`${apiUrl}/cars/car`, newCar);
  alert("New car was created");
  await imageUploadToApi(res.data._id, image);
};

// ADD IMAGE
export const imageUploadToApi = async (id, img) => {
  const formData = new FormData();
  formData.append("image", img);
  const res = axios.post(`${apiUrl}/cars/car/imageUpload/${id}`, formData);
  return res;
};
// UPDATE A CAR
export const updateCarInApi = async (obj) => {
  const { image, ...car } = obj;
  const res = await axios.put(`${apiUrl}/cars/car/${obj._id}`, car);
  alert("Listing updated succesfully");
  return res;
};

// DELETE CAR
export const deleteCarInApi = async (id) => {
  const res = await axios.delete(`${apiUrl}/cars/car/${id}`);
  alert("Listing succesfully deleted");
  return res;
};
