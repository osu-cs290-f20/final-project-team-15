import React from 'react';
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

function Header()
{

    return (

        <div>
            {/* Navbar  */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/">Data Harvester 9000</Link></Navbar.Brand>
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
                <NavDropdown.Item>
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
        </div>

    )

}

export default Header;