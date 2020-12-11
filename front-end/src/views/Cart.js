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
import {ProgressBar, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "../Cart.css";
import { AiFillApple } from "react-icons/ai";
import { FaCcVisa } from "react-icons/fa";
import { IoLogoVimeo } from "react-icons/io";
import { RiMastercardFill } from 'react-icons/ri';
import { GiFeather } from "react-icons/gi";
import { SiChase } from "react-icons/si";


class Cart extends React.Component {

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

                    
                    <h3 id="pricing-pageheader">Checkout</h3>
                
                    <p class="pricing-description">
                        Please review your cart before submitting your order form.
                    </p>
                    <div className="service">
                        <div class="row">
                            <div class="">
                                <div className="card1">
                                    <div className="description">
                                        <FaCcVisa className="icon-layout option"/>
                                        
                                        <h4 className="option sale-text">CREDIT</h4>
                                    
                                        <h3 class="money-text option">1223 4324 1324 7646</h3>
                                    </div>

                                    <div class="">
                                        
                                        <ProgressBar now={20} variant="light" className="sale-bar"/>
                                        
                                        <MDBContainer className="subscription-button">
                                            <MDBBtn onClick={this.Modaltoggle(12)} className="modal-pagefont">
                                                Purchase Credit Card Today
                                            </MDBBtn>
                                            <MDBModal isOpen={this.state.modal12} Modaltoggle={this.Modaltoggle(12)} backdrop={false}>
                                                <MDBModalHeader Modaltoggle={this.Modaltoggle(12)} className="modal-headerStyle">
                                                    Purchase Credit Card
                                                </MDBModalHeader>
                                                <MDBModalBody className="modal-bodyfont">
                                                    Are you sure you want to purchase this?
                                                </MDBModalBody>
                                                <MDBModalFooter>
                                                    <MDBBtn color="danger" onClick={this.Modaltoggle(12)} className="modal-innerbuttons">
                                                        Cancel
                                                    </MDBBtn>
                                                    <MDBBtn color="success" className="modal-innerbuttons">
                                                        Confirm
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
                                <div className="card2">
                                    <div className="description">
                                        <SiChase className="icon-layout option"/>
                                        
                                        <h4 className="option sale-text">CREDIT</h4>
                                    
                                        <h3 class="money-text option">5849 5348 1348 5049</h3>
                                    </div>

                                    <div class="">
                                        
                                        <ProgressBar now={40} variant="light" className="sale-bar"/>
                                        
                                        <MDBContainer className="subscription-button">
                                            <MDBBtn onClick={this.Modaltoggle(12)} className="modal-pagefont">
                                                Purchase Credit Card Today
                                            </MDBBtn>
                                            <MDBModal isOpen={this.state.modal12} Modaltoggle={this.Modaltoggle(12)} backdrop={false}>
                                                <MDBModalHeader Modaltoggle={this.Modaltoggle(12)} className="modal-headerStyle">
                                                    Purchase Credit Card
                                                </MDBModalHeader>
                                                <MDBModalBody className="modal-bodyfont">
                                                    Are you sure you want to purchase this?
                                                </MDBModalBody>
                                                <MDBModalFooter>
                                                    <MDBBtn color="danger" onClick={this.Modaltoggle(12)} className="modal-innerbuttons">
                                                        Cancel
                                                    </MDBBtn>
                                                    <MDBBtn color="success" className="modal-innerbuttons">
                                                        Confirm
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
                                <div className="card3">
                                    <div className="description">
                                        <AiFillApple className="icon-layout option"/>
                                        <h4 className="option sale-text">CREDIT</h4>
                                    
                                        <h3 class="money-text option">4852 2384 2348 2839</h3>
                                    </div>

                                    <div class="">
                                        
                                        <ProgressBar now={70} variant="light" className="sale-bar"/>
                                        
                                        <MDBContainer className="subscription-button">
                                            <MDBBtn onClick={this.Modaltoggle(12)} className="modal-pagefont">
                                                Purchase Credit Card Today
                                            </MDBBtn>
                                            <MDBModal isOpen={this.state.modal12} Modaltoggle={this.Modaltoggle(12)} backdrop={false}>
                                                <MDBModalHeader Modaltoggle={this.Modaltoggle(12)} className="modal-headerStyle">
                                                    Purchase Credit Card
                                                </MDBModalHeader>
                                                <MDBModalBody className="modal-bodyfont">
                                                    Are you sure you want to purchase this?
                                                </MDBModalBody>
                                                <MDBModalFooter>
                                                    <MDBBtn color="danger" onClick={this.Modaltoggle(12)} className="modal-innerbuttons">
                                                        Cancel
                                                    </MDBBtn>
                                                    <MDBBtn color="success" className="modal-innerbuttons">
                                                        Confirm
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
                    <div class="service">
                        <div class="row">
                            <div class="">
                                <div className="card4">
                                    <div className="description">
                                        <IoLogoVimeo className="icon-layout option"/>
                                        
                                        <h4 className="option sale-text">CREDIT</h4>
                                    
                                        <h3 class="money-text option">3472 2831 4983 2384</h3>
                                    </div>

                                    <div class="">
                                        
                                        <ProgressBar now={60} variant="light" className="sale-bar"/>
                                        
                                        <MDBContainer className="subscription-button">
                                            <MDBBtn onClick={this.Modaltoggle(12)} className="modal-pagefont">
                                                Purchase Credit Card Today
                                            </MDBBtn>
                                            <MDBModal isOpen={this.state.modal12} Modaltoggle={this.Modaltoggle(12)} backdrop={false}>
                                                <MDBModalHeader Modaltoggle={this.Modaltoggle(12)} className="modal-headerStyle">
                                                    Purchase Credit Card
                                                </MDBModalHeader>
                                                <MDBModalBody className="modal-bodyfont">
                                                    Are you sure you want to purchase this?
                                                </MDBModalBody>
                                                <MDBModalFooter>
                                                    <MDBBtn color="danger" onClick={this.Modaltoggle(12)} className="modal-innerbuttons">
                                                        Cancel
                                                    </MDBBtn>
                                                    <MDBBtn color="success" className="modal-innerbuttons">
                                                        Confirm
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
                            <div className="card5">
                                <div className="description">
                                    <RiMastercardFill className="icon-layout option"/>
                                    
                                    <h4 className="option sale-text">CREDIT</h4>
                                
                                    <h3 class="money-text option">8345 3482 5384 2349</h3>
                                </div>

                                <div class="">
                                    
                                    <ProgressBar now={40} variant="light" className="sale-bar"/>
                                    
                                    <MDBContainer className="subscription-button">
                                        <MDBBtn onClick={this.Modaltoggle(12)} className="modal-pagefont">
                                            Purchase Credit Card Today
                                        </MDBBtn>
                                        <MDBModal isOpen={this.state.modal12} Modaltoggle={this.Modaltoggle(12)} backdrop={false}>
                                            <MDBModalHeader Modaltoggle={this.Modaltoggle(12)} className="modal-headerStyle">
                                                Purchase Credit Card
                                            </MDBModalHeader>
                                            <MDBModalBody className="modal-bodyfont">
                                                Are you sure you want to purchase this?
                                            </MDBModalBody>
                                            <MDBModalFooter>
                                                <MDBBtn color="danger" onClick={this.Modaltoggle(12)} className="modal-innerbuttons">
                                                    Cancel
                                                </MDBBtn>
                                                <MDBBtn color="success" className="modal-innerbuttons">
                                                    Confirm
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
                                <div className="card6">
                                    <div className="description">
                                        <GiFeather className="icon-layout option"/>
                                        
                                        <h4 className="option sale-text">CREDIT</h4>
                                    
                                        <h3 class="money-text option">3244 1942 2004 3314</h3>
                                    </div>

                                    <div class="">
                                        
                                        <ProgressBar now={55} variant="light" className="sale-bar"/>
                                        
                                        <MDBContainer className="subscription-button">
                                            <MDBBtn onClick={this.Modaltoggle(12)} className="modal-pagefont">
                                                Purchase Credit Card Today
                                            </MDBBtn>
                                            <MDBModal isOpen={this.state.modal12} Modaltoggle={this.Modaltoggle(12)} backdrop={false}>
                                                <MDBModalHeader Modaltoggle={this.Modaltoggle(12)} className="modal-headerStyle">
                                                    Purchase Credit Card
                                                </MDBModalHeader>
                                                <MDBModalBody className="modal-bodyfont">
                                                    Are you sure you want to purchase this?
                                                </MDBModalBody>
                                                <MDBModalFooter>
                                                    <MDBBtn color="danger" onClick={this.Modaltoggle(12)} className="modal-innerbuttons">
                                                        Cancel
                                                    </MDBBtn>
                                                    <MDBBtn color="success" className="modal-innerbuttons">
                                                        Confirm
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
                                <div className="card7">
                                    <div className="description">
                                        <GiFeather className="icon-layout option"/>
                                        
                                        <h4 className="option sale-text">CREDIT</h4>
                                    
                                        <h3 class="money-text option">3428 8123 4589 3482</h3>
                                    </div>

                                    <div class="">
                                        
                                        <ProgressBar now={65} variant="light" className="sale-bar"/>
                                        
                                        <MDBContainer className="subscription-button">
                                            <MDBBtn onClick={this.Modaltoggle(12)} className="modal-pagefont">
                                                Purchase Credit Card Today
                                            </MDBBtn>
                                            <MDBModal isOpen={this.state.modal12} Modaltoggle={this.Modaltoggle(12)} backdrop={false}>
                                                <MDBModalHeader Modaltoggle={this.Modaltoggle(12)} className="modal-headerStyle">
                                                    Purchase Credit Card
                                                </MDBModalHeader>
                                                <MDBModalBody className="modal-bodyfont">
                                                    Are you sure you want to purchase this?
                                                </MDBModalBody>
                                                <MDBModalFooter>
                                                    <MDBBtn color="danger" onClick={this.Modaltoggle(12)} className="modal-innerbuttons">
                                                        Cancel
                                                    </MDBBtn>
                                                    <MDBBtn color="success" className="modal-innerbuttons">
                                                        Confirm
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
                                <div className="card8">
                                    <div className="description">
                                        <GiFeather className="icon-layout option"/>
                                        
                                        <h4 className="option sale-text">CREDIT</h4>
                                    
                                        <h3 class="money-text option">3428 2318 5802 5893</h3>
                                    </div>

                                    <div class="">
                                        
                                        <ProgressBar now={75} variant="light" className="sale-bar"/>
                                        
                                        <MDBContainer className="subscription-button">
                                            <MDBBtn onClick={this.Modaltoggle(12)} className="modal-pagefont">
                                                Purchase Credit Card Today
                                            </MDBBtn>
                                            <MDBModal isOpen={this.state.modal12} Modaltoggle={this.Modaltoggle(12)} backdrop={false}>
                                                <MDBModalHeader Modaltoggle={this.Modaltoggle(12)} className="modal-headerStyle">
                                                    Purchase Credit Card
                                                </MDBModalHeader>
                                                <MDBModalBody className="modal-bodyfont">
                                                    Are you sure you want to purchase this?
                                                </MDBModalBody>
                                                <MDBModalFooter>
                                                    <MDBBtn color="danger" onClick={this.Modaltoggle(12)} className="modal-innerbuttons">
                                                        Cancel
                                                    </MDBBtn>
                                                    <MDBBtn color="success" className="modal-innerbuttons">
                                                        Confirm
                                                    </MDBBtn>
                                                </MDBModalFooter>
                                            </MDBModal>
                                        </MDBContainer>

                                    </div>
                                </div>
                            </div>
                        </div>


                </div>
                <div>
                    <ProgressBar now={100} variant="white" className="line" />
                    <br />
                        <Link className="text-link" to="/">
                            <Button variant="success" className="cart-button">Place Order</Button>{' '}
                        </Link>
                </div>
                <br />
            </div>

        )

    }
}


export default Cart;