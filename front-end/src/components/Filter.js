import React from "react";
import { Form, FormControl, Button, Col } from "react-bootstrap"; // Navbar material
import "bootstrap/dist/css/bootstrap.min.css";
import mockData from "../mockdata.json";
import "../Filter.css"

function Filter(props) {
  return (
    <div className="div">
      {/* filtering*/}
      <h1 className="header">Filtering</h1>
      <br /> 
      <Form.Group className="group">
        <Form.Row>
          <Form.Label column="sm" lg={2} className="label">
            Age Range:
          </Form.Label>
          <Col>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Age min"
              className="control"
            />
          </Col>
          <Col>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Age max"
              className="control"
            />
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  );
}

export default Filter;
