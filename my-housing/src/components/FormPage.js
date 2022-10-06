import React from "react"

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function FormPage() {
  return (
    <div >
      <Row>
        <Form.Label class = "font-bold text-xl pt-10 ml-10" column="lg" lg={2}>
          Roomate Matching
        </Form.Label>
        <Row>
        <Form.Label class = "pt-10 ml-10" column="lg" lg={2}>
          Fill out this Survey to Find a Potential Roomate
        </Form.Label>
        </Row>
      </Row>
      <Row>
        <Form.Label class = "p-10 ml-auto" column="lg" lg={2}>
          Do you Smoke?
        </Form.Label>
        <Row>
          <Form.Control class = "ml-10 w-auto " size="lg" type="text" placeholder="Enter Response Here" />
        </Row>
      </Row>
      <Row>
      <Form.Label class = "pt-10 ml-10" column="lg" lg={2}>
          Do you have Pets?
        </Form.Label>
        <Row>
          <Form.Control class = "ml-10 w-auto" size="lg" type="text" placeholder="Enter Response Here" />
        </Row>
      </Row>
      <Row>
      <Form.Label class = "pt-10 ml-10" column="lg" lg={2}>
          What is your major?
        </Form.Label>
        <Row>
          <Form.Control class = "ml-10 w-auto" size="lg" type="text" placeholder="Enter Response Here" />
        </Row>
      </Row>
      <Row>
      <Form.Label class = "pt-10 ml-10" column="lg" lg={2}>
          Write down 5 hobbies/interests you would like to share?
        </Form.Label>
        <Row>
          <Form.Control class = "ml-10 w-auto" size="lg" type="text" placeholder="Enter Response Here"/>
        </Row>
      </Row>
      <Row>
      <Form.Label class = "pt-10 ml-10" column="lg" lg={2}>
          Is there anything else you would like people to know
        </Form.Label>
        <Row>
          <Form.Control class = "ml-10 w-auto" size="lg" type="text" placeholder="Enter Response Here" />
        </Row>
      </Row>
      <br />
    </div>
  );
}

export default FormPage;