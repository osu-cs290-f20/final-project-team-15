import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBContainer,
  MDBView,
} from "mdbreact";
import "../Careers.css";
import { Button } from "react-bootstrap"; // Navbar material
import "bootstrap/dist/css/bootstrap.min.css";

class CareersPage extends React.Component {
  // render the page
  render() {
    return (
      <div>
        <MDBContainer className="">
          <MDBRow>
            <MDBCol md="4">
              <div className="view-overlay">
                <MDBView waves>
                  <img
                    src="https://cdn.discordapp.com/attachments/774021123591372800/786095130326990879/Anthonyface.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </MDBView>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <div className="view-overlay">
                <MDBView waves>
                  <img
                    src="https://cdn.discordapp.com/attachments/774021123591372800/786095366268780594/20201208_210153.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </MDBView>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default CareersPage;
