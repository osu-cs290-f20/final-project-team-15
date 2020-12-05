import React from "react";
import { Form, FormControl, Button,Col } from "react-bootstrap"; // Navbar material
import "bootstrap/dist/css/bootstrap.min.css";
import mockData from "../mockdata.json";


function Filter(props) {
  return (
    <div>
      {/* filtering*/}
      <Form.Group>
        <Form.Row>
          <Form.Label column="sm" lg={2}>
            Age range
          </Form.Label>
          <Col>
            <Form.Control size="sm" type="text" placeholder="Age min" style={myStyle} />
            <Form.Control size="sm" type="text" placeholder="Age max" style={myStyle} />
          </Col>
        </Form.Row>
      </Form.Group>
    </div>
  );
}

const myStyle = {
    width: 200
};


export default Filter;
