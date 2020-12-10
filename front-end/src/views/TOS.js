import React from 'react';
import { Button, Col, Form, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../TOS.css";
import { Next } from 'react-bootstrap/esm/PageItem';
import { Link, BrowserRouter, Route } from "react-router-dom";
import Switch from 'react-bootstrap/esm/Switch';
import Home from "./Home";

class TermsAndConditions extends React.Component {
    constructor() {
        super();
        this.state = {

        };
        // Essentially the requried event listener
        // this.handleAgree = this.handleAgree.bind(this);
        // this.handleDisagree = this.handleDisagree.bind(this);
    };
    
    render(){
        return (
            <div className="TermsStyle">
                <header id="TermsHeader">
                    Terms and Conditions
                </header>
                <div className="ParagraphTOS">
                <br />
                    <h1 id="TermsTitle">
                        A. TERMS OF SALE
                    </h1>
                <br />
                    <p className="TOSparagraph">
                        A. TERMS OF SALE B. DATA HARVESTER STORE TERMS AND CONDITIONS
                    </p>
                <br />
                    <p className="TOSparagraph">
                        THE LEGAL ARGREEMENTS SET OUT BELOW GOVERN YOUR USE OF THE DATA HARVESTER 9000 SERVICES ("SERVICES"). TO AGREE TO THESE TERMS, CLICK "AGREE". IF YOU DO NOT
                        AGREE TO THESE TERMS, DO NOT CLICK "AGREE", AND DO NOT USE THE SERVICES.
                    </p>
                <br />
                    <p className="CaptionTOS">
                        <strong>PAYMENTS, TAXES, AND REFUND POLICY</strong>
                    </p>
                <br />
                    <p className="TOSparagraph">
                        You agree that you will pay for all products you purchase through the Services, and that Data Harvester 9000 may charge your payment 
                        method for any products purchased and for any additional amounts (including any taxes and late fees, as applicable) that 
                        may be accrued by or in connection with your Account. You are responible for the timely manner of payments of all fees and for providing 
                        Data Harvester 9000 with a valid payment method for payment of all fees. For details of how purchases are billed please visit our website to 
                        find more information. Although our services are nice and very helpful in mulitple situations, we are entitled to a fair share of your biweekly income. 
                        There was a lot of work put into this website in a span of a few days. Thank you for your cooperation.
                    </p>
                    <p className="TOSparagraph">
                        Your total price will include the price of the product plus any applicable tax; such tax is based on the bill-to address and the tax rate in effect at the time you download the product.
                        All sales and rentals of products are final.
                        Prices for products offered via the Services may change at any time, and the Services do not provide price protection or refunds in the event of a price reduction or promotional offering.
                        If a product becomes unavailable following a transaction but prior to download, your sole remedy is a refund. If technical problems prevent or unreasonably delay delivery of your product, your 
                        exclusive and sole remedy is either replacement or refund of the price paid, as determined by Data Harvester 9000.
                    </p>
                <br />
                    <p className="CaptionTOS">
                        <strong>FAMILY SHARING</strong>
                    </p>
                <br />
                    <p className="TOSparagraph">
                        Family Sharing allows you to share eligible Data Harvester 9000 products with up to six members (including yourself) of a “Family.” 
                        Not all products, including In-App Purchases, content that is not available for re-download, subscriptions, and some previously purchased apps, 
                        are eligible for Family Sharing. In addition Data Harvester reserves the right to disband a Family in accordance with the “Termination” section of this Agreement.
                    </p>
                <br />
                    <h1 id="TermsTitle">
                        B. DATA HARVESTER TERMS AND CONDITIONS
                    </h1>
                <br />
                    <p className="CaptionTOS">
                        <strong>YOUR ACCOUNT</strong>
                    </p>
                <br />
                    <p className="TOSparagraph">
                        Only persons age 6 years or older can create accounts. Accounts for persons under 6 years old can be created by a parent or legal
                        guardian using the Family Sharing or approved educational institution. Children under the age of majority should review this Agreement with their 
                        parent or guardian to ensure that the child and parent or legal guardian understand it. As you register for use, there are a few things you 
                        should know before using. WE ARE NOT RESPONSIBLE FOR ANY DAMAGES THAT YOU CAUSE USING THIS FEATURE ON YOUR ACCOUNT. Please do not file any lawsuits
                        against Data Harvester 9000 inc. We have full protection under the jursidication of the United States Government. As you register user of the 
                        Data Harvester Service, you may establish an account. Don't reveal your account information to anyone else. You are soley responsible for maintaining 
                        the confidentiality and security of your account and for all activities that occur on or through your account, and you agree to immediately notify Data
                        Harvester 9000 inc. of any security breach of your account. Data Harvester inc. shall not be responsible for any losses arising out of the 
                        unauthorized use of your account. Please just change your password once in a while and for god shake don't use "password123".
                    </p>
                <br />
                    <p className="CaptionTOS">
                        <strong>USAGE RULES</strong>
                    </p>
                        <p className="TOSparagraph">
                        (i) You can grab data from anywhere you'd like
                        (ii) You can pull a practical prank on your coworkers, family members, and even girlfriend.
                            We encourage it!
                        (iii) We bet $100 you dont look over the terms and Conditions.
                        (iv) Nobody every reads this but free monthly milkshakes for reading it till this point.
                        </p>
                <br />
                    <p className="CaptionTOS">
                        <strong>DATA CONTENT AND PRIVACY</strong>
                    </p>
                <br />
                    <p className="TOSparagraph">
                        Here at Data Harvester headquarters, we value data...as long as its not our data being leaked. Our webpage is secured enough
                        to not leak any of our own data. You can try but you will fail. Apple reserves the right to close accounts and request 
                        alternative forms of payment if a Gift Certificate, iTunes Card or Code, Content Code, or Allowance is fraudulently obtained 
                        or used on the Service. More coperate talk, but if you try to gain access to our data, we will lock you out and we will never ever
                        let you back inside. You will be ban and yes that is the only way we can protect our data. Our company vision is: We sell data but save
                        our own.
                    </p>
                </div>
                <Link className="text-link" to="/">
                    <Button variant="outline-success" id="TOSbutton">
                    Agree to Terms
                    </Button>{" "}
                {/* Link to 404 page for disagree */}
                </Link>
                <Link className="text-link" to="/404">
                    <Button variant="outline-danger" id="TOSbutton">
                    Disagree to Terms
                    </Button>{" "}
                </Link>
            </div>
        )
    }
}


export default TermsAndConditions;