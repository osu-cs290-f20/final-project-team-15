import React from 'react';
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
                        <li className="listText"><a>Data Browser</a></li>
                        <li className="listText"><a>Data Uploader</a></li>
                        <li className="listText"><a>Data Auctionhouse</a></li>
                    </ul>
            </div>
            <div>
                <h2 className="header">About Data Harvester 9000</h2>
                    <ul>
                        <li className="listText"><a>FAQ</a></li>
                        <li className="listText"><a>Terms and Conditions</a></li>
                        <li className="listText"><a>Careers</a></li>
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