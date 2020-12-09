import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Forms.css";

// function () <- gets called on the click on "submit"
/*
    in the body:

    iterate through each form input

    create json like so:
    let json = {
        "first_name" : __(input value),
        "last_name" : __(input value),
        "whatever_inputs_you_make" : __(input value),
    }

*/

// form -> after on click on sumbit botton  -> add each value of each input into json
class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validated: false,
      first_name: "",
      last_name: "",
      blood_type: "",
      age: "",
      gender: "",
      creditCard: "",
      phoneNumber: "",
      race: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
  }
  // methods
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleRadioChange(event) {

    this.setState({

      gender: event.target.value

    })

  }

  handleClick(event) {

    const form = event.currentTarget;
    if(form.checkValidity() === false)
    {

      event.preventDefault();
      event.stopPropagation();

    }

    this.setState({

      validated: true

    })

    // if (
    //   this.state.first_name.length > 0 && 
    //   this.state.last_name.length > 0 &&
    //   parseInt(this.state.age) > 0 &&
    //   this.state.blood_type.length > 0 &&
    //   this.state.phoneNumber.length > 0 &&
    //   this.state.gender.length > 0 &&
    //   this.state.race.length > 0 &&
    //   this.state.creditCard > 0
    //   ) {
      // list out the conditions
        let json = {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          age: this.state.age,
          blood_type: this.state.blood_type,
          phone_number: this.state.phoneNumber,
          gender: this.state.gender,
          race: this.state.race,
          credit_card: this.state.creditCard
          // check if need credit card
        };

      fetch("http://localhost:8000/harvester/", {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(json)
      }).then((res) => {
      
        if(res.status === 500) {
          console.log("Missing a required field in payload")
        }
        else if(res.status === 201) {
          console.log("Created");

          // Anthony: Do page refresh or clear inputs/state here
          this.state.first_name = "";
          this.state.last_name = "";
          this.state.blood_type = "";
          this.state.age = "";
          this.state.gender = "";
          this.state.creditCard = "";
          this.state.phoneNumber = "";
          this.state.race = "";

        }
      }).catch((e) => {
        // Something didn't work
        console.log(e);
      })

    //}
    // else {
    //   //alert("Invalid Inputs please check")
    // }
  }

  render() {
    return (
      <div className="divForms">
        <h1 className="headerForms">Forms</h1>
        <br />
        <Form noValidate validated={this.state.validated} onSubmit={this.handleClick}>
          <Form.Group controlId="name" className="groupForms">
            <Form.Row>
              <Col>
                <Form.Label className="labelForms" column="sm">
                  Name
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  required
                  size="sm"
                  type="text"
                  placeholder="First"
                  className="controlForms"
                  name="first_name"
                  onChange={this.handleChange}
                  // value={this.state.first_name}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your first name.
                </Form.Control.Feedback>
              </Col>
              <Col>
                <Form.Control
                  required
                  size="sm"
                  type="text"
                  placeholder="Last"
                  className="controlForms"
                  name="last_name"
                  onChange={this.handleChange}
                  //value={this.state.last_name}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your last name.
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="age" className="groupForms">
            <Form.Row>
              <Col>
                <Form.Label className="labelForms" column="sm">
                  Age
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  required
                  size="sm"
                  type="number"
                  placeholder="Age"
                  className="controlForms"
                  name="age"
                  onChange={this.handleChange}
                  //value={this.state.age}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your age.
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="blood" className="groupForms">
            <Form.Row>
              <Col>
                <Form.Label column="sm" className="labelForms">
                  Blood Type
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  required
                  size="sm"
                  type="text"
                  placeholder="Blood Type"
                  className="controlForms"
                  name="blood_type"
                  onChange={this.handleChange}
                  //value={this.state.blood_type}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a blood type.
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="phone" className="groupForms">
            <Form.Row>
              <Col>
                <Form.Label column="sm" className="labelForms">
                  Phone Number
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  required
                  size="sm"
                  type="text"
                  placeholder="Mobile Phone Number"
                  className="controlForms"
                  name="phoneNumber"
                  onChange={this.handleChange}
                  //value={this.state.phoneNumber}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a mobile phone number.
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="gender" className="groupForms">
            <Form.Row>
              <Col>
                <Form.Label as="legend" column="sm" className="labelForms">
                  Gender
                </Form.Label>
              </Col>
              <Col>
                <Form.Check
                  defaultChecked
                  type="radio"
                  label="Male"
                  className="bubbleFills"
                  name="gender"
                  id="Male"
                  onChange={this.handleRadioChange}
                  value="Male"
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  className="bubbleFills"
                  name="gender"
                  id="Female"
                  onChange={this.handleRadioChange}
                  value="Female"
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  className="bubbleFills"
                  name="gender"
                  id="Other"
                  onChange={this.handleRadioChange}
                  value="Other"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="creditcard" className="groupForms">
            <Form.Row>
              <Col>
                <Form.Label column="sm" className="labelForms">
                  Credit Card
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  required
                  size="sm"
                  type="text"
                  placeholder="Credit/Debit"
                  className="controlForms"
                  name="creditCard"
                  onChange={this.handleChange}
                  //value={this.state.creditCard}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a credit card number.
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group controlId="race" className="groupForms">
            <Form.Row>
              <Col>
                <Form.Label column="sm" className="labelForms">Race</Form.Label>
              </Col>
              <Col>
                <Form.Control 
                  required
                  as="select" 
                  className="controlForms" 
                  size="sm" 
                  defaultValue="Choose..."
                  name="race" 
                  onChange={this.handleChange}
                >
                  <option>Choose...</option>
                  <option>Asian</option>
                  <option>White</option>
                  <option>Black or African American</option>
                  <option>Hispanic/Latino</option>
                  <option>Native American or Alaska Native</option>
                  <option>Native Hawaiian or Other Pacific Islander</option>
                  <option>Other</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please choose a race.
                </Form.Control.Feedback>
              </Col>
            </Form.Row>
          </Form.Group>

          <Button variant="outline-danger" type="submit">
            Submit
          </Button>

        </Form>
       
        {/* <h1 style={{color:"#FFFFFF"}}> gender: {this.state.gender.length > 0 ? "true" : "false"}</h1>
        <h1 style={{color:"#FFFFFF"}}> Test value: {this.state.gender}</h1> */}
      </div>
    );
  }
}

export default Forms;
