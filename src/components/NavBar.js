import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="links">
        <Container>
          <Navbar.Brand>
            <Link to="/">Iron Cars</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/listings">Listings</Link>
            <Link to="/createNewCar">Create New Listing</Link>
            <Link to="/createNewMaker">Create New Maker</Link>
            <Link to="/makersList">Brands</Link>
            <Link to="/about">Contact Us</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
