import React from "react";
import {
    MDBContainer,
    MDBInputGroup,
    MDBBtn, 
    MDBModal,
    MDBModalHeader,
    MDBModalFooter,
    MDBModalBody,
    MDBCol,
} from "mdbreact";
import {ProgressBar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "../Pricing.css";
import {FaRegMoneyBillAlt} from "react-icons/fa"

class PricingPage extends React.Component {

    // the state of the modal toggle
    state = {
        modal12: false
    }

    Modaltoggle = nr => () => {
        let modalValue = "modal" + nr
        this.setState({
            [modalValue]: !this.state[modalValue]
        });
    }

    // render the screen
    render() {

        return(

            <div>
                  
                <section className="text-center">

                    
                    <h3 id="pricing-pageheader">Our pricing plans</h3>
                
                    <p class="text-muted w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
                    eum porro a pariatur veniam.</p>
                    <div className="service">
                        <div class="row">
                            <div class="">
                                <div className="sale">
                                    <div className="description">
                                        <FaRegMoneyBillAlt className="icon-layout option"/>
                                        
                                        <h4 className="option sale-text">SALES</h4>
                                    
                                        <h3 class="money-text option">$20</h3>
                                    </div>

                                    <div class="">
                                        
                                        <ProgressBar now={20} variant="light" className="sale-bar"/>
                                        
                                        <MDBContainer className="subscription-button">
                                            <MDBBtn onClick={this.Modaltoggle(12)} className="modal-pagefont">
                                                Purchase Sales Subscription
                                            </MDBBtn>
                                            <MDBModal isOpen={this.state.modal12} Modaltoggle={this.Modaltoggle(12)} backdrop={false}>
                                                <MDBModalHeader Modaltoggle={this.Modaltoggle(12)} className="modal-headerStyle">
                                                    Purchase Item
                                                </MDBModalHeader>
                                                <MDBModalBody className="modal-bodyfont">
                                                    Are you sure you want to purchase a Sales subscript plan?
                                                </MDBModalBody>
                                                <MDBModalFooter>
                                                    <MDBBtn color="danger" onClick={this.Modaltoggle(12)} className="modal-innerbuttons">
                                                        Cancel
                                                    </MDBBtn>
                                                    <MDBBtn color="success" className="modal-innerbuttons">
                                                        Buy
                                                    </MDBBtn>
                                                </MDBModalFooter>
                                            </MDBModal>
                                        </MDBContainer>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="">
                                <div className="sale">
                                    <div className="description">
                                        <FaRegMoneyBillAlt className="icon-layout option"/>
                                        
                                        <h4 className="option sale-text">SALES</h4>
                                    
                                        <h3 class="money-text option">$20</h3>
                                    </div>

                                    <div class="">
                                        
                                        <ProgressBar now={20} variant="light" className="sale-bar"/>
                                        
                                        <MDBContainer className="subscription-button">
                                            <MDBBtn onClick={this.Modaltoggle(12)} className="modal-pagefont">
                                                Purchase Pro Subscription
                                            </MDBBtn>
                                            <MDBModal isOpen={this.state.modal12} Modaltoggle={this.Modaltoggle(12)} backdrop={false}>
                                                <MDBModalHeader Modaltoggle={this.Modaltoggle(12)} className="modal-headerStyle">
                                                    Purchase Item
                                                </MDBModalHeader>
                                                <MDBModalBody className="modal-bodyfont">
                                                    Are you sure you want to purchase a Pro subscript plan?
                                                </MDBModalBody>
                                                <MDBModalFooter>
                                                    <MDBBtn color="danger" onClick={this.Modaltoggle(12)} className="modal-innerbuttons">
                                                        Cancel
                                                    </MDBBtn>
                                                    <MDBBtn color="success" className="modal-innerbuttons">
                                                        Buy
                                                    </MDBBtn>
                                                </MDBModalFooter>
                                            </MDBModal>
                                        </MDBContainer>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="">
                                <div className="sale">
                                    <div className="description">
                                        <FaRegMoneyBillAlt className="icon-layout option"/>
                                        
                                        <h4 className="option sale-text">SALES</h4>
                                    
                                        <h3 class="money-text option">$20</h3>
                                    </div>

                                    <div class="">
                                        
                                        <ProgressBar now={20} variant="light" className="sale-bar"/>
                                        
                                        <MDBContainer className="subscription-button">
                                            <MDBBtn onClick={this.Modaltoggle(12)} className="modal-pagefont">
                                                Purchase Enterprise Subscription
                                            </MDBBtn>
                                            <MDBModal isOpen={this.state.modal12} Modaltoggle={this.Modaltoggle(12)} backdrop={false}>
                                                <MDBModalHeader Modaltoggle={this.Modaltoggle(12)} className="modal-headerStyle">
                                                    Purchase Item
                                                </MDBModalHeader>
                                                <MDBModalBody className="modal-bodyfont">
                                                    Are you sure you want to purchase a Enterprise subscript plan?
                                                </MDBModalBody>
                                                <MDBModalFooter>
                                                    <MDBBtn color="danger" onClick={this.Modaltoggle(12)} className="modal-innerbuttons">
                                                        Cancel
                                                    </MDBBtn>
                                                    <MDBBtn color="success" className="modal-innerbuttons">
                                                        Buy
                                                    </MDBBtn>
                                                </MDBModalFooter>
                                            </MDBModal>
                                        </MDBContainer>

                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                </section>
            </div>

        )

    }
}

export default PricingPage;