import React, { useState } from "react";
import { Form, FormControl, Button, Col } from "react-bootstrap"; // Navbar material
import "bootstrap/dist/css/bootstrap.min.css";
import mockData from "../mockdata.json";
import "../Filter.css";

function Filter({setFirstName, setLastName, setAgeMin, setAgeMax, checkedBloodTypes, setPhoneNumber, checkedGenders, setCreditCard, checkedRaces, SetFilterState}) {
  

  return (
    <div className="divFilter">

      {/* filtering*/}
      <h1 className="header-filter">Filtering</h1>
      <br />

      <Form onSubmit={() => SetFilterState()}>
        <Form.Group controlId="nameField" className="groupForms">
          <Form.Row>
            <Col>
              <Form.Label className="labelForms" column="sm">
                Name
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="First"
                className="controlForms"
                onChange={(event) => setFirstName(event.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
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
            <Col>
            <Form.Label column="sm" className="label">
              Age Range
            </Form.Label>
            </Col>
            <Col>
              <Form.Control
                size="sm"
                type="number"
                placeholder="Min"
                className="control"
                onChange={(event) => setAgeMin(event.target.value)}
              />
            </Col>
            <Col>
              <Form.Control
                size="sm"
                type="number"
                placeholder="Max"
                className="control"
                onChange={(event) => setAgeMax(event.target.value)}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group controlId="bloodTypeCheckBoxes" className="groupForms">
          <Form.Row>
            <Col>
              <Form.Label column="sm" className="labelForms">
                Blood Type
              </Form.Label>
            </Col>
            <Col>
              <Form.Check
                inline
                className="blood-type"
                type="checkbox"
                id="blood"
                label="A+"
                value="A+"
                onChange={(event) => checkedBloodTypes(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                className="blood-type"
                type="checkbox"
                id="blood"
                label="A-"
                value="A-"
                onChange={(event) => checkedBloodTypes(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                className="blood-type"
                type="checkbox"
                id="blood"
                label="B+"
                value="B+"
                onChange={(event) => checkedBloodTypes(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                className="blood-type"
                type="checkbox"
                id="blood"
                label="B-"
                value="B-"
                onChange={(event) => checkedBloodTypes(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                className="blood-type"
                type="checkbox"
                id="blood"
                label="O+"
                value="O+"
                onChange={(event) => checkedBloodTypes(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                className="blood-type"
                type="checkbox"
                id="blood"
                label="O-"
                value="O-"
                onChange={(event) => checkedBloodTypes(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                className="blood-type"
                type="checkbox"
                id="blood"
                label="AB+"
                value="AB+"
                onChange={(event) => checkedBloodTypes(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                type="checkbox"
                id="blood"
                className="blood-type"
                label="AB-"
                value="AB-"
                onChange={(event) => checkedBloodTypes(event.target.value, event.target.checked)}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group controlId="phoneNumberField" className="groupForms">
          <Form.Row>
            <Col>
              <Form.Label column="sm" className="labelForms">
                Phone Number
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Mobile Phone Number"
                className="controlForms"
                name="phoneNumber"
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group controlId="genderCheckBoxes" className="groupForms">
          <Form.Row>
            <Col>
              <Form.Label as="legend" column="sm" className="labelForms">
                Gender
              </Form.Label>
            </Col>
            <Col>
              <Form.Check
                type="checkbox"
                label="Male"
                className="bubbleFills"
                name="gender"
                id="Male"
                onChange={(event) => checkedGenders(event.target.value, event.target.checked)}
                value="Male"
              />
              <Form.Check
                type="checkbox"
                label="Female"
                className="bubbleFills"
                name="gender"
                id="Female"
                onChange={(event) => checkedGenders(event.target.value, event.target.checked)}
                value="Female"
              />
              <Form.Check
                type="checkbox"
                label="Other"
                className="bubbleFills"
                name="gender"
                id="Other"
                onChange={(event) => checkedGenders(event.target.value, event.target.checked)}
                value="Other"
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group controlId="creditCardField" className="groupForms">
          <Form.Row>
            <Col>
              <Form.Label column="sm" className="labelForms">
                Credit Card
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Credit/Debit"
                className="controlForms"
                name="creditCard"
                onChange={(event) => setCreditCard(event.target.value)}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Form.Group controlId="raceCheckBoxes" className="groupForms">
          <Form.Row>
            <Col>
              <Form.Label column="sm" className="labelForms">
                Race
              </Form.Label>
            </Col>
            <Col>
            <Form.Check
                inline
                className="race"
                type="checkbox"
                id="race"
                label="Asian"
                value="Asian"
                onChange={(event) => checkedRaces(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                className="race"
                type="checkbox"
                id="race"
                label="White"
                value="White"
                onChange={(event) => checkedRaces(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                className="race"
                type="checkbox"
                id="race"
                label="Black or African American"
                value="Black or African American"
                onChange={(event) => checkedRaces(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                className="race"
                type="checkbox"
                id="race"
                label="Hispanic/Latino"
                value="Hispanic/Latino"
                onChange={(event) => checkedRaces(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                className="race"
                type="checkbox"
                id="race"
                label="Native American or Alaska Native"
                value="Native American or Alaska Native"
                onChange={(event) => checkedRaces(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                className="race"
                type="checkbox"
                id="race"
                label="Native Hawaiian or Other Pacific Islander"
                value="Native Hawaiian or Other Pacific Islander"
                onChange={(event) => checkedRaces(event.target.value, event.target.checked)}
              />
              <Form.Check
                inline
                className="race"
                type="checkbox"
                id="race"
                label="Other"
                value="Other"
                onChange={(event) => checkedRaces(event.target.value, event.target.checked)}
              />
            </Col>
          </Form.Row>
        </Form.Group>

        <Button variant="outline-danger" type="submit">
          Filter
        </Button>
      </Form>
    </div>
  );
}
export default Filter;
