import React from "react";
import {
  MDBCard, 
  MDBCardBody, 
  MDBCardImage, 
  MDBCardTitle, 
  MDBCardText, 
  MDBCol,
  MDBContainer,
} from "mdbreact";
import { FaGithubSquare } from "react-icons/fa";
import "../Careers.css";
import { Button } from "react-bootstrap"; // Navbar material
import { Link, BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class CareersPage extends React.Component {
  // render the page
  render() {
    return (
      <div>

        <header className="page-title">Meet The Team</header>
        <br />
        <header className="careers-header">The Developers</header>
        <div className="career-team">
        <MDBContainer className="career-container">
          <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
              <MDBCardImage 
                className="img-fluid" 
                src="https://cdn.discordapp.com/attachments/774021123591372800/786095130326990879/Anthonyface.jpg"
                waves />
              <MDBCardBody className="profile-body">
                <MDBCardTitle className="profile-title">Anthony Nguyen</MDBCardTitle>
                <MDBCardText className="profile-text">
                  Front End React Developer, Marketing Supervisor, and the head of the Red Team at Data Harvester 9000.
                  </MDBCardText>
                <div className="career-team">
                  <a href="https://www.linkedin.com/in/anthony-nguyen-051ab517a/"><Button variant="outline-primary" className="button">Linkedin</Button></a>
                  <a href="https://www.github.com/ninjaco1"><Button variant="outline-light" className="button">Github</Button></a>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
        <MDBContainer className="career-container">
          <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
              <MDBCardImage 
                className="img-fluid" 
                src="https://cdn.discordapp.com/attachments/774021123591372800/786095718178881546/seniorpic1final.jpg"
                waves />
              <MDBCardBody className="profile-body">
                <MDBCardTitle className="profile-title">Khai Phan</MDBCardTitle>
                <MDBCardText className="profile-text">
                  Full Stack React Developer at Data Harvester 9000, on the CSS team of innovation.
                  </MDBCardText>
                  <a href="https://www.linkedin.com/in/khai-phan-42b2611a3/"><Button variant="outline-primary" className="button">Linkedin</Button></a>
                  <a href="https://github.com/Esk3tit"><Button variant="outline-light" className="button">Github</Button></a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>

        <MDBContainer className="career-container">
          <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
              <MDBCardImage 
                className="img-fluid" 
                src="https://cdn.discordapp.com/attachments/774021123591372800/786171155907084288/JohnnyFace.JPG"
                waves />
              <MDBCardBody className="profile-body">
                <MDBCardTitle className="profile-title">Jonathan Mach</MDBCardTitle>
                <MDBCardText className="profile-text">
                  Quality Assurance and Front End React Developer at Data Harvester 9000, on the CSS team of innovation.
                  </MDBCardText>
                  <a href="https://www.linkedin.com/in/jonathan-mach-b5406a198/"><Button variant="outline-primary" className="button">Linkedin</Button></a>
                  <a href="https://github.com/machj-sudo"><Button variant="outline-light" className="button">Github</Button></a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>

        <MDBContainer className="career-container">
          <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
              <MDBCardImage 
                className="img-fluid" 
                src="https://cdn.discordapp.com/attachments/774021123591372800/786096462299529236/profilepic.jpeg"
                waves />
              <MDBCardBody className="profile-body">
                <MDBCardTitle className="profile-title">Mark Huynh</MDBCardTitle>
                <MDBCardText className="profile-text">
                  Full Stack Developer and Lead Cloud Engineer at Data Harvester. Builds everything data and cloud, driving the future of innovation for data harvesting. Ensuring no user's data will be safe in the future.
                  </MDBCardText>
                  <a href="https://www.linkedin.com/in/mark-huynh-503/"><Button variant="outline-primary" className="button">Linkedin</Button></a>
                  <a href="https://github.com/mark-huynh"><Button variant="outline-light" className="button">Github</Button></a>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
        </div>
        
        <h1 className="careers-header">Human Resources</h1>

        <div className="career-team">
        <MDBContainer className="career-container">
          <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
              <MDBCardImage 
                className="img-fluid" 
                src="https://cdn.discordapp.com/attachments/774021123591372800/786095366268780594/20201208_210153.jpg"
                waves />
              <MDBCardBody className="profile-body">
                <MDBCardTitle className="profile-title">Mumen Rider</MDBCardTitle>
                <MDBCardText className="profile-text">
                  The top-ranked C-Class hero, Mumen Rider is a bike rider who earned his rank by doing just about any good deed he sees.
                  </MDBCardText>
                  <Link className="text-link" to="/404">
                    <Button variant="outline-light">Connect</Button>
                  </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
        <MDBContainer className="career-container">
          <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
              <MDBCardImage 
                className="img-fluid" 
                src="https://cdn.discordapp.com/attachments/774021123591372800/786095550835458138/me.jpg"
                waves />
              <MDBCardBody className="profile-body">
                <MDBCardTitle className="profile-title">Almighty Overlord</MDBCardTitle>
                <MDBCardText className="profile-text">
                  I am your God; I am your saviour; Last but not least, I am the CEO of Data Harvester.
                  I dedicate the following scripture to my faithful followers:
                  囗九    九巳丩,
                  工    山氏丂    亍凵丂七    力口凵七七氏    夕口    七口    力巳戊.
                  工    长门口山    山巳    匚口凵丨戊门゜七    丂长丩卩巳    七口门讠夕九七,
                  乃凵七    七九氏七゜丂    氏丨厂讠夕九七.

                  丘口口戊门讠夕九七 夕讠厂丨,
                  工゜丨丨 丂巳巳    丩口凵    七口爪口厂厂口山.
                  </MDBCardText>
                  <Link className="text-link" to="/404">
                    <Button variant="outline-light">Connect</Button>
                  </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>

        <MDBContainer className="career-container">
          <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
              <MDBCardImage 
                className="img-fluid" 
                src="https://cdn.discordapp.com/attachments/774021123591372800/786171175377698826/JohnnyFaceMeme.jpg"
                waves />
              <MDBCardBody className="profile-body">
                <MDBCardTitle className="profile-title">Captain Hooks</MDBCardTitle>
                <MDBCardText className="profile-text">
                  01001110 01100101 01110110 01100101 01110010 00100000 01100111 01101111 01101110 01101110 01100001 
                  00100000 01100111 01101001 01110110 01100101 00100000 01111001 01101111 01110101 00100000 01110101 
                  01110000 00001101 00001010 01001110 01100101 01110110 01100101 01110010 00100000 01100111 01101111 
                  01101110 01101110 01100001 00100000 01101100 01100101 01110100 00100000 01111001 01101111 01110101 
                  00100000 01100100 01101111 01110111 01101110 00001101 00001010 01001110 01100101 01110110 01100101 
                  01110010 00100000 01100111 01101111 01101110 01101110 01100001 00100000 01110010 01110101 01101110 
                  00100000 01100001 01110010 01101111 01110101 01101110 01100100 00100000 01100001 01101110 01100100 
                  00100000 01100100 01100101 01110011 01100101 01110010 01110100 00100000 01111001 01101111 01110101 
                  00001101 00001010 
                </MDBCardText>
                  <Link className="text-link" to="/404">
                    <Button variant="outline-light">Connect</Button>
                  </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>

        <MDBContainer className="career-container">
          <MDBCol style={{ maxWidth: "22rem" }}>
            <MDBCard>
              <MDBCardImage 
                className="img-fluid" 
                src="https://cdn.discordapp.com/attachments/774021123591372800/786096742093029407/image0.jpg"
                waves />
              <MDBCardBody className="profile-body">
                <MDBCardTitle className="profile-title">Mark Stache</MDBCardTitle>
                <MDBCardText className="profile-text">
                Ẻ̵̡̨͕̼̣͔̳̠͕̥̾̈̂̊͗x̶̝̭̝̺̀̌̈̀͂̉̍̀͗̚ͅp̶͍͉̻̦̽e̸͖̬̟͓̦̭̳̿̈́̾̐ṛ̶̢̧̛̗̭̞̬͙̩͆͆͐̓̍̈͘͝i̸̮͂̅̓̄͆̚ȩ̶̭̼̍͘n̶͎̥̪͖͓̺̠̋̋͗c̷̛̩̹̟͓̮̝̈́̑̀͝ͅę̴̡̫̳̙̳̙͋͂͂̾̍̍͋́̈͜ ̵̜͓̱̖̙̎͒͆̃̓͜͝t̶͚̍͑̀͠h̵̦̟̫̞̿͠͝e̵̹̿̃̆̄͝ ̷̫̦̫̮͈͙͈̣̫̅̈́̄͑́̋̀͌̚͝D̶̖̰̫̗͚̥͇̦͔̣͋͑́̃ȋ̶̧̘͓̦̭̺̟̯̹͌̿͜f̶̡̧̠͙͇͕̖̖̦͕̀́͒̔͝f̶̠̦̮̩̖̆ͅͅe̸̯̲̗͈͈̠̮̿̍̐͌̉̈̽̈́̓̚ͅŗ̵̡͕͚͔̠͕͋e̶͚̖̬͇̜̪̟͆̈́̈́͑ṋ̸̦̦͉̳̗̤͕͇̗̑̊̍̎̀̅̇͠c̷̭͇̹̪͎̱̋̄̎̆̂̅̐e̶̫̠͙̫̖̫̹̠͋͊͊͋͌͠ͅ
                  </MDBCardText>
                  <Link className="text-link" to="/404">
                    <Button variant="outline-light">Connect</Button>
                  </Link>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
        </div>

      </div>
    );
  }
}

export default CareersPage;
