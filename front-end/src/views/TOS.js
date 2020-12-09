import React from 'react';
import { button, Col, Form, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "../TOS.css";

class TermsAndConditions extends React.Component {
    constructor() {
        super();
        this.state = {

        };
        // Essentially the requried event listener
        this.handleSumbit = this.handleSumbit.bind(this);
    };

    // handle the button click method to take back to home page
    handleSumbit(){
        // handle the submit button
    }
    
    render(){
        return (
            <div className="TermsStyle">
                <header id="TermsHeader">
                    Terms and Conditions
                </header>
                <br />
                    <h1 id="TermsHeader">
                        A. TERMS OF SALE
                    </h1>
                <br />
                    <
            </div>
        )
    }
}


export default TermsAndConditions;