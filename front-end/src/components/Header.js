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
            <Navbar.Brand><Link className="text-link" to="/">Data Harvester 9000</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <NavDropdown title="Services" id="collapsable-nav-dropdown">
                <NavDropdown.Item>
                    <Link className="text-link" to="/data-browser">
                    Data Browser
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link className="text-link" to="/data-uploader">
                    Data Uploader
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item><Link className="text-link" to="/data-auctionhouse">Data Auctionhouse</Link></NavDropdown.Item>
                </NavDropdown>
                <Nav.Link><Link className="text-link" to="/pricing">Pricing</Link></Nav.Link>
                <NavDropdown title="About" id="collapsable-nav-dropdown">
                <NavDropdown.Item>
                    <Link className="text-link" to="/faq">
                    FAQ
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link className="text-link" to="/tos">
                    Terms and Conditions
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link className="text-link" to="/about">
                    About Us
                    </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                    <Link className="text-link" to="/careers">
                    Careers
                    </Link>
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
                <Nav.Link>
                    <Link className="text-link" to="/enterprise">
                    For Enterprise
                    </Link>
                </Nav.Link>
                <Nav.Link eventKey={2}>
                    <Link className="text-link" to="/cart">
                    Cart <FaShoppingCart/ >
                    </Link>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>

    )

}

export default Header;