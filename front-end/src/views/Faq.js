import React, { Component } from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import "../Faq.css";
import MessageBox from "../components/MessageBox";

class FAQ extends React.Component {    

    constructor(){
        super();
        this.state = {

        }
    };
    // render the page
    render() {
        const { activeItemPills } = this.state;

        return(
            <div>
                <header className="faq-header">Fequently Asked Questions</header>
                <br />
                <div>
                <div className="tabs">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                        <Nav variant="pills" className="flex-column" >
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="first"  >What does Data Harvester 9000 do?</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="second">Are there privacy policies?</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="third">How do I acquire this feature?</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="fourth">What do you do with the data?</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="fifth">Why did Costco remove their combo pizza?</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="sixth">Why does Rob Hess like kittens?</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="seventh">Does a straw have one hole or two?</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="eigth">Am I the imposter?</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="ninth">Why are the subscriptions so expensive?</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="tenth">What's in Area 51?</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="11th">Binary to Text</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="12th">Is a hotdog a sandwich?</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="tab-link"  eventKey="13th">What's the best WiFi password?</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h1 className="tab-answer">
                                    This is the most common question we get. A matter of fact this is the
                                    question we get every single day from new users. The simple answer is: we sell your data.
                                </h1>
                          
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <h1 className="tab-answer">
                                    There are no privacy policies. You are all vulunerable to our newly designed Data
                                    Harvester 9000.
                                </h1>
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <h1 className="tab-answer">
                                    You pay us.
                                </h1>
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <h1 className="tab-answer">
                                    We sell it...duhhhh
                                </h1>
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                                <h1 className="tab-answer">
                                    IDK BUT IM TRIGGERED.
                                </h1>
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="sixth">
                                <h1 className="tab-answer">
                                    https://placekitten.com/480/480
                                    <img src="https://placekitten.com/480/480"/>                            
                                </h1>
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="seventh">
                                <h1 className="tab-answer">
                                    Uhhhh idk ask a philospher...
                                </h1>
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="eigth">
                                <h1 className="tab-answer">
                                    <img src="https://steamuserimages-a.akamaihd.net/ugc/1648839998632766859/AF8FE4EAD7895C4ED51D6AFC82546458018505E4/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" />
                                </h1>
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="ninth">
                                <h1 className="tab-answer">
                                    They're reasonably priced.
                                </h1>
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="tenth">
                                <h1 className="tab-answer">
                                    <img src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2019/04/27/12/alien2704.jpg?width=968&auto=webp&quality=75"/>
                                </h1>
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="11th">
                                <h1 className="tab-answer">
                                    I would tell a binary joke but... 
                                    <p>
                                    01000010 01110101 01110100 00100000 01001001 00100000 
                                    01100100 01101111 01101110 10000000011001 01110100 00100000 
                                    01110100 01101000 01101001 01101110 01101011 00100000 
                                    01101001 01110100 00100000 01110111 01101111 01110101 01101100 
                                    01100100 00100000 01100011 01101111 01101101 01110000 01110101 
                                    01110100 01100101 00100000 01110111 01101001 01110100 01101000 
                                    00100000 01111001 01101111 01110101
                                    </p>
                                </h1>
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="12th">
                                <h1 className="tab-answer">
                                    Its a sandwich...trust me
                                </h1>
                            
                            </Tab.Pane>
                            <Tab.Pane eventKey="13th">
                                <h1 className="tab-answer">
                                    Password: ItsaCapitalwandaCapitalFinwifi
                                </h1>
                            
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                    </Tab.Container>
                </div>
                </div>
                <MessageBox />
            </div>
        );
    }
}

export default FAQ;