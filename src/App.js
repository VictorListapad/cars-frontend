import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomeView from "./views/HomeView";
import ContactView from "./views/ContactView";
import ListingsView from "./views/ListingsView";
import NavBar from "./components/NavBar";
import AddCarView from "./views/AddCarView";
import AddMakerView from "./views/AddMakerView";
import MakersView from "./views/MakersView";
import CarDetailsView from "./views/CarDetailsView";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<ContactView />} />
        <Route path="/listings" element={<ListingsView />} />
        <Route path="/createNewCar" element={<AddCarView />} />
        <Route path="/createNewMaker" element={<AddMakerView />} />
        <Route path="/makersList" element={<MakersView />} />
        <Route path="/car/:id" element={<CarDetailsView />} />
      </Routes>
    </div>
  );
}

export default App;
