import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

// GET ALL MAKERS
export const getAllMakers = async () => {
  const res = await axios.get(`${apiUrl}/makers`);
  return res;
};

// CREATE MAKER
export const createMakerInApi = async (maker) => {
  const res = await axios.post(`${apiUrl}/makers/maker`, maker);
  alert("Created a new maker");
  return res;
};

// DELETE MAKER
export const deleteMakerInApi = async (id) => {
  const res = await axios.delete(`${apiUrl}/makers/maker/${id}`);
  return res;
};
