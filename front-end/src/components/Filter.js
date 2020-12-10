import React, { useState } from "react";
import { Form, FormControl, Button, Col } from "react-bootstrap"; // Navbar material
import "bootstrap/dist/css/bootstrap.min.css";
import mockData from "../mockdata.json";
import "../Filter.css";

function Filter(props) {
  const [ageMin, setAgeMin] = useState(0);
  const [ageMax, setAgeMax] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div className="div">
      <div>
        <p>Min Age: {ageMin}</p>
        <p>Max Age: {ageMax}</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
      </div>

      {/* filtering*/}
      <h1 className="header">Filtering</h1>
      <br />

      <Form>
        <Form.Group controlId="nameField" className="groupForms">
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
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                required
                size="sm"
                type="text"
                placeholder="Last"
                className="controlForms"
                onChange={(event) => setLastName(event.target.value)}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group controlId="ageField" className="group">
          <Form.Row>
            <Form.Label column="sm" lg={2} className="label">
              Age Range
            </Form.Label>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Min"
                className="control"
                onChange={(event) => setAgeMin(event.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Max"
                className="control"
                onChange={(event) => setAgeMax(event.target.value)}
              />
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
              <Form.Label column="sm" className="labelForms">
                Race
              </Form.Label>
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
    </div>
  );
}
export default Filter;
