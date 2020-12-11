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
import "../Header.css";

function Header()
{

    return (

        <div>
            {/* Navbar  */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Data Harvester 9000</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <NavDropdown title="Services" id="collapsable-nav-dropdown">
                    <NavDropdown.Item href="/data-browser">
                    Data Browser
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/data-uploader">
                    Data Uploader
                    </NavDropdown.Item>
                <NavDropdown.Item href="/data-auctionhouse">Data Auctionhouse</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/pricing">Pricing</Nav.Link>
                <NavDropdown title="About" id="collapsable-nav-dropdown">
                    <NavDropdown.Item href="/faq">
                    FAQ
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/tos">
                    Terms and Conditions
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/about">
                    About Us
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/careers">
                    Careers
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link href="/enterprise">
                    For Enterprise
                </Nav.Link>
                <Nav.Link href="/cart">
                    Cart <FaShoppingCart/ >
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>

    )

}

export default Header;