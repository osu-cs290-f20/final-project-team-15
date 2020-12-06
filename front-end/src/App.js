import logo from "./logo.svg";
import "./App.css";
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

import { FaShoppingCart } from "react-icons/fa";

function App() {
  return (
    <div className="App" style={pageSytle}>
      <header className=""></header>
      {/* Navbar  */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Data Harvester 9000</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Services" id="collapsable-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Browse Data
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Upload Your Data
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Data Auction</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="About" id="collapsable-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                FAQ
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Terms and Conditions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">About Us</NavDropdown.Item>
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

      <div style={alignStyle}>
        {/* Form filtering */}
        <Filter />
        <Post />
      </div>
      
      <UserReview />

      <LinkSection />
    </div>
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
