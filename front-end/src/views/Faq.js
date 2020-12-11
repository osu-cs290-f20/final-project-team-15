import React, { Component } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBTabPane,
    MDBTabContent,
    MDBNav,
    MDBNavItem,
    MDBLink,
} from 'mdbreact';
import "../Faq.css";

class FAQ extends React.Component {
    // tab state
    state = {
        activeItemPills: '1'
    };

    // the toggle for each tab button
    togglePills = tab => () => {
        const { activePills } = this.state
        if (activePills !== tab) {
            this.setState({
                activeItemPills: tab
            })
        }
    }
    
    // render the page
    render() {
        const { activeItemPills } = this.state;

        return(
            <div>
                <header className="faq-header">Fequently Asked Questions</header>
                <br />
                <MDBContainer>
                    <MDBLink title="Pills" href="https://mdbootstrap.com/docs/react/components/pills/"/>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol md='12'>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </MDBContainer>
            </div>
        );
    }
}

export default FAQ;