import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"; // Navbar material
import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import Post from "./components/Post";
import Filter from "./components/Filter";
import UserReview from "./components/userReview";
import LinkSection from "./components/linkSection";
import Forms from "./components/Forms";
import AboutUs from "./views/AboutUs"
import Footer from "./components/Footer"

import { FaShoppingCart } from "react-icons/fa";

function App() {
  return (
    <Router>
    <div className="App">
      <header className=""></header>
      {/* Navbar  */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Data Harvester 9000</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Services" id="collapsable-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Data Browser
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Data Uploader
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Data Auctionhouse</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="About" id="collapsable-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                FAQ
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Terms and Conditions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                <Link to="/about">
                About Us
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Careers
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">For Enterprise</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Cart <FaShoppingCart/ >
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      // Routing
      <Switch>

        <Route path="/about">
          
        </Route>

      </Switch>

      <Forms />


      <div style={alignStyle}>
        {/* Form filtering */}
        <Filter />
        <Post />
      </div>
      
      <UserReview />

      <AboutUs />

      <Footer />
    </div>
    </Router>
  );
}

const pageSytle = {
  backgroundColor: "#18191A"
};

const alignStyle = {
  display: "flex",
  flexDirection: "row"
};
export default App;
