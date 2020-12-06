import React from "react";
import { Form, FormControl, Button, Col } from "react-bootstrap"; // Navbar material
import "bootstrap/dist/css/bootstrap.min.css";
import mockData from "../mockdata.json";

function Filter(props) {
  return (
    <div style={divStyle}>
      {/* filtering*/}
      <h1 style={{color:"#FFFFFF"}}>Filtering</h1>
      <Form.Group style={fGroupStyle}>
        <Form.Row>
          <Form.Label column="sm" lg={2} style={fLabelSytle}>
            Age Range
          </Form.Label>
          <Col>
            <Form.Control
              size="sm"
              type="text"
              placeholder="Age min"
              style={myStyle}
            />
            <Form.Control
              size="sm"
              type="text"
              placeholder="Age max"
              style={myStyle}
            />
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  );
}

const divStyle = {
  padding: 10,
  margin: 10,
  backgroundColor: "#242526",
  display: "flex",
  width: 300,
  borderRadius: "10px",
  height: 500
};

const myStyle = {
  width: 100,
  padding: 5,
  margin: 5
};

const fLabelSytle = {
  color: "#FFFFFF"

};

const fGroupStyle = {
  display: "inline-flex",
  flexDirection: "column"
}

export default Filter;
