import React from 'react';
import {
  Col,
  Form, FormGroup, ControlLabel, FormControl,
} from 'react-bootstrap';

const Filters = () => (
  <Form horizontal>
    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Search
      </Col>
      <Col sm={10}>
        <FormControl type="text" placeholder="Search by Name" autoFocus />
      </Col>
    </FormGroup>
  </Form>
);

export default Filters;
