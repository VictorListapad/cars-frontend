import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { isAuth, logOut } from "../services/authService";
function NavBar() {
  const user = isAuth();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="links"
    >
      <Container>
        <Navbar.Brand className="brand">
          <Link to="/">Iron Cars</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/listings">Listings</Link>
            <Link to="/about">Contact Us</Link>
            {user.role === "ADMIN" && (
              <>
                <Link to="/createNewMaker">Create New Maker</Link>
                <Link to="/makersList">Brands</Link>
                <Link to="/listingsControl">Listings Control</Link>
                <Link to="/usersList">Users</Link>
              </>
            )}
            {user ? (
              <>
                <Link to="/createNewCar">Create New Listing</Link>
                <Link to="#" onClick={logOut}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/signup">Sign Up</Link>
                <Link to="/signin">Log In</Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
// import { Navbar, Container, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./NavBar.css";
// import { isAuth, logOut } from "../services/authService";
// function NavBar() {
//   const user = isAuth();
//   return (
//     <Navbar
//       collapseOnSelect
//       expand="lg"
//       bg="dark"
//       variant="dark"
//       className="links"
//     >
//       <Container>
//         <Navbar.Brand className="brand">
//           <Link to="/">Iron Cars</Link>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             <Link to="/listings">Listings</Link>
//             <Link to="/createNewCar">Create New Listing</Link>
//             <Link to="/createNewMaker">Create New Maker</Link>
//             <Link to="/makersList">Brands</Link>
//             <Link to="/about">Contact Us</Link>
//             <Link to="/signup">Sign Up</Link>
//             <Link to="/signin">Log In</Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;
