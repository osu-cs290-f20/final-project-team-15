import React from 'react';
import { Link } from "react-router-dom";
import { FaDiscord, } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaVimeoSquare } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaPatreon } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaRedditSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaTumblrSquare } from "react-icons/fa";
import "../Footer.css"

function Footer()
{

    return(
        <div className="div">
            <div>
                <h2 className="header">Services</h2>
                    <ul>
                        <li className="listText">
                            <Link className="text-link" to="/data-browser">
                                Data Browser
                            </Link>    
                        </li>
                        <li className="listText">
                            <Link className="text-link" to="/data-uploader">
                                Data Uploader
                            </Link>
                        </li>
                        <li className="listText">
                            <Link className="text-link" to="/about">
                                Data Auctionhouse
                            </Link>
                        </li>
                    </ul>
            </div>
            <div>
                <h2 className="header">About Data Harvester 9000</h2>
                    <ul>
                        <li className="listText">FAQ</li>
                        <li className="listText">
                            <Link className="text-link" to="/tos">
                                Terms and Conditions
                            </Link>
                        </li>
                        <li className="listText">
                            <Link className="text-link" to="/careers">
                                Careers
                            </Link>
                        </li>
                        <li className="listText">
                            <Link className="text-link" to="/about">
                                About
                            </Link>
                        </li>
                    </ul>
            </div>
            <div>
                <h2 className="header">Follow Us</h2>
                <span id="icons">
                    <FaDiscord id="icons"/>
                    <FaFacebookSquare id="icons"/>
                    <FaGithubSquare id="icons"/>
                    <FaGooglePlusSquare id="icons"/>
                    <FaInstagramSquare id="icons"/>
                    <FaLinkedin id="icons"/>
                    <FaLine id="icons"/>
                    <FaPatreon id="icons"/>
                    <FaPaypal id="icons"/>
                    <FaRedditSquare id="icons"/>
                    <FaTwitterSquare id="icons"/>
                    <FaSnapchatSquare id="icons"/>
                    <FaYoutubeSquare id="icons"/>
                    <FaVimeoSquare id="icons"/>
                    <FaTumblrSquare id="icons"/>
                </span>
            </div>
        </div>
    )

}

export default Footer;