import axios from "axios";
const apiUrl = process.env.REACT_APP_API_URL;

// GET ALL MAKERS
export const getAllMakers = async () => {
  const res = await axios.get(
    `https://boiling-citadel-13895.herokuapp.com/api/v1/makers`
  );
  return res;
};

// CREATE MAKER
export const createMakerInApi = async (maker) => {
  const res = await axios.post(
    `https://boiling-citadel-13895.herokuapp.com/api/v1/makers/maker`,
    maker
  );
  alert("Created a new maker");
  return res;
};

// DELETE MAKER
export const deleteMakerInApi = async (id) => {
  const res = await axios.delete(
    `https://boiling-citadel-13895.herokuapp.com/api/v1/makers/maker/${id}`
  );
  alert("Maker succesfully deleted!");
  return res;
};
