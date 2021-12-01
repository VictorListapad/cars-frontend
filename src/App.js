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
import SignUpView from "./views/SignUpView";
import SignInView from "./views/SignInView";
import AdminRoute from "./components/AdminRoute";
import AuthRoute from "./components/AuthRoute";
import ListingsControlView from "./views/ListingsControlView";
import UsersListView from "./views/UsersListView";
import UpdateUserView from "./views/UpdateUserView";

function App() {
  function scrollToTop() {
    scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="App">
      <NavBar id="nav" />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<ContactView />} />
        <Route path="/listings" element={<ListingsView />} />
        <Route path="/car/:id" element={<CarDetailsView />} />
        <Route path="/signup" element={<SignUpView />} />
        <Route path="/signin" element={<SignInView />} />
        <Route element={<AuthRoute />}>
          <Route path="/createNewCar" element={<AddCarView />} />
        </Route>
        <Route element={<AdminRoute />}>
          <Route path="/createNewMaker" element={<AddMakerView />} />
          <Route path="/usersList" element={<UsersListView />} />
          <Route path="/makersList" element={<MakersView />} />
          <Route path="/listingsControl" element={<ListingsControlView />} />
          {/* <Route path="/updateUser/:id" element={<UpdateUserView />} /> */}
        </Route>
      </Routes>
      <button
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          fontSize: "4rem",
          background: "transparent",
          color: "#fff",
        }}
        onClick={scrollToTop}
      >
        ^
      </button>
    </div>
  );
}

export default App;
