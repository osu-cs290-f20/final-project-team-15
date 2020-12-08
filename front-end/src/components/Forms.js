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
  constructor() {
    super();
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
  }
  // methods
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    if (this.state.first_name) {
      // list out the conditions
      let json = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        age: this.state.age,
        blood_type: this.state.blood_type,
        phone_number: this.state.phoneNumber,
        gender: this.state.gender,
        race: this.state.race
        /*
      gender
      race
      */
      };
    }
  }

  render() {
    return (
      <div className="div">
        <h1 className="header">Forms</h1>
        <br />
        <Form.Group className="group">
          <Form.Row>
            {/* name */}
            <Form.Label column="sm" lg={2} className="label">
              Name:
            </Form.Label>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="First"
                className="control"
                name="first_name"
                onChange={this.handleChange}
                value={this.state.first_name}
              />
            </Col>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Last"
                className="control"
                name="last_name"
                onChange={this.handleChange}
                value={this.state.last_name}
              />
            </Col>
            <Form.Label column="sm" lg={2} className="label">
              Age:
            </Form.Label>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Age"
                className="control"
                name="last_name"
                onChange={this.handleChange}
                value={this.state.age}
              />
            </Col>
            <Form.Label column="sm" lg={2} className="label">
              Blood Type:
            </Form.Label>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Type"
                className="control"
                name="blood_type"
                onChange={this.handleChange}
                value={this.state.blood_type}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label column="sm" lg={2} className="label">
              Phone Number:
            </Form.Label>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Type"
                className="control"
                name="phoneNumber"
                onChange={this.handleChange}
                value={this.state.phoneNumber}
              />
            </Col>
            <Form.Label as="legend" column sm={2}>
              Radios
            </Form.Label>
            {/* this this */}
            <Col sm={10}>
              <Form.Check
                type="radio"
                label="Male"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
              <Form.Check
                type="radio"
                label="Female"
                name="formHorizontalRadios"
                id="formHorizontalRadios2"
              />
              <Form.Check
                type="radio"
                label="Other"
                name="formHorizontalRadios"
                id="formHorizontalRadios3"
              />
            </Col>
            <Form.Label column="sm" lg={2} className="label">
              Credit Card:
            </Form.Label>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Type"
                className="control"
                name="creditCard"
                onChange={this.handleChange}
                value={this.state.creditCard}
              />
            </Col>
          </Form.Row>
        </Form.Group>
        {/* <h1 style={{color:"#FFFFFF"}}>{this.state.first_name}</h1> */}
        <Button variant="outline-danger" onClick={this.handleClick}>
          Submit
        </Button>{" "}
      </div>
    );
  }
}

export default Forms;
