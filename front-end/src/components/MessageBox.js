import React, { Component } from 'react';
import { MDBNotification } from 'mdbreact';
import "../MessageBox.css";

class MessageBox extends React.Component {
    
    render() {

        return( 
            <div>
                <MDBNotification className="notification-box"
                    autohide={5000}
                    bodyClassName="p-5 font-weight-bold white-text"
                    className="stylish-color-dark"
                    closeClassName="blue-grey-text"
                    fade
                    icon="envelope"
                    iconClassName="blue-grey-text"
                    message="Hello there! Let me know if you have any questions"
                    show
                    title="Data Harvester Help Center"
                    text="2 seconds ago"
                    titleClassName="elegant-color-dark white-text"
                    style={{
                        position: "fixed",
                        top: "10px",
                        right: "10px",
                        zIndex: 9999
                    }}
                    />
            </div>
        );
    }
    
}


export default MessageBox;