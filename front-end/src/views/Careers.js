import React from 'react';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import "../Careers.css";

class CareersPage extends React.Component {
    // render the page
    render() {

      return (
        <div>
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg="6">
                        <div className="profile">
                        <MDBCol lg="6">
                            <MDBView waves>
                            <img 
                                src="https://cdn.discordapp.com/attachments/774021123591372800/786095130326990879/Anthonyface.jpg" 
                                className="img-fluid" 
                                alt="" />
                            </MDBView>
                        </MDBCol>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
      )

    }
}
  
export default CareersPage;
