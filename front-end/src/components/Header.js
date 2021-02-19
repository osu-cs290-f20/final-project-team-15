import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"; // Navbar material
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";
import "../Header.css";

function Header() {
  return (
    <div>
      {/* Navbar  */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="https://osu-cs290-f20.github.io/final-project-team-15/#/">
          Data Harvester 9000
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Services" id="collapsable-nav-dropdown">
              <NavDropdown.Item href="/final-project-team-15/#/data-browser">
                Data Browser
              </NavDropdown.Item>
              <NavDropdown.Item href="/final-project-team-15/#/data-uploader">
                Data Uploader
              </NavDropdown.Item>
              <NavDropdown.Item href="/final-project-team-15/#/data-auctionhouse">
                Data Auctionhouse
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/final-project-team-15/#/pricing">Pricing</Nav.Link>
            <NavDropdown title="About" id="collapsable-nav-dropdown">
              <NavDropdown.Item href="/final-project-team-15/#/faq">
                FAQ
              </NavDropdown.Item>
              <NavDropdown.Item href="/final-project-team-15/#/tos">
                Terms and Conditions
              </NavDropdown.Item>
              <NavDropdown.Item href="/final-project-team-15/#/about">
                About Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/final-project-team-15/#/careers">
                Careers
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="/final-project-team-15/#/enterprise">
              For Enterprise
            </Nav.Link>
            <Nav.Link href="/final-project-team-15/#/cart">
              Cart <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
