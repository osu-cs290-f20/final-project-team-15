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
      first_name: "",
      last_name: "",
      blood_type: "",
      age: "",
      gender: "",
      creditCard: "",
      phoneNumber: "",
      race: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  // methods
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    if (
      this.state.first_name.length > 0 && 
      this.state.last_name.length > 0 &&
      Number(this.state.age) > 0 &&
      this.state.blood_type.length > 0 &&
      this.
      ) {
      // list out the conditions
      let json = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        age: this.state.age,
        blood_type: this.state.blood_type,
        phone_number: this.state.phoneNumber,
        gender: this.state.gender,
        race: this.state.race
   
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
          console.log("Created")

          // Anthony: Do page refresh or clear inputs/state here

        }
      }).catch((e) => {
        // Something didn't work
        console.log(e);
      })

    }
  }

  render() {
    return (
      <div className="divForms">
        <h1 className="headerForms">Forms</h1>
        <br />
        <Form.Group className="groupForms">
          <Form.Row>
            <Form.Label column="sm" lg={2} className="labelForms">
              Name:
            </Form.Label>
            <Col id="FormsCell">
              <Form.Control
                size="sm"
                type="text"
                placeholder="First"
                className="controlForms"
                name="first_name"
                onChange={this.handleChange}
                value={this.state.first_name}
              />
            </Col>
            <Col id="FormsCell">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Last"
                className="controlForms"
                name="last_name"
                onChange={this.handleChange}
                value={this.state.last_name}
              />
            </Col>
            <Form.Label column="sm" lg={2} className="labelForms">
              Age:
            </Form.Label>
            <Col id="FormsCell">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Age"
                className="controlForms"
                name="age"
                onChange={this.handleChange}
                value={this.state.age}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group className="groupForms">
          <Form.Row>
            <Form.Label column="sm" lg={2} className="labelForms">
              Blood Type:
            </Form.Label>
            <Col id="FormsCell">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Type"
                className="controlForms"
                name="blood_type"
                onChange={this.handleChange}
                value={this.state.blood_type}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group className="groupForms">
          <Form.Row>
            <Form.Label column="sm" lg={2} className="labelForms">
              Phone Number:
            </Form.Label>
            <Col id="FormsCell">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Cell"
                className="controlForms"
                name="phoneNumber"
                onChange={this.handleChange}
                value={this.state.phoneNumber}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group className-="groupForms">
          <Form.Row>
            <Form.Label as="legend" column sm={2} className="labelForms">
              Radios:
            </Form.Label>
            {/* this this */}
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Male"
                className="bubbleFills"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Female"
                className="bubbleFills"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="Other"
                className="bubbleFills"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
            <Form.Label column="sm" lg={2} className="labelForms">
              Credit Card:
            </Form.Label>
            <Col id="FormsCell">
              <Form.Control
                size="sm"
                type="text"
                placeholder="Credit/Debt"
                className="controlForms"
                name="creditCard"
                onChange={this.handleChange}
                value={this.state.creditCard}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        {/* <h1 style={{color:"#FFFFFF"}}>{this.state.first_name}</h1> */}
        <div myClass="form-input-container">
          <label for="form-race" myClass="labelForms">Race</label>
          <div myClass="form-input-element">
            <select id="form-race" myClass="form-input" name="race" onChange={this.handleChange}>
              <option selected value={this.state.race}>Other</option>
              <option>Asian</option>
              <option>White</option>
              <option>Black</option>
              <option>Hispanic/Latino</option>
              <option>Native American</option>
              <option>Other</option>
            </select>
          </div>
        </div>
        <Button variant="outline-danger" onClick={this.handleClick}>
          Submit
        </Button>{" "}
      </div>
    );
  }
}

export default Forms;
