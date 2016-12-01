import React from 'react';
import {
  Row, Grid, Col, Panel,
  Form, FormGroup, ControlLabel, FormControl,
} from 'react-bootstrap';

import DataTable from 'components/DataTable';
import { data, columns } from './model';

const Portal = () => (
  <Row>
    <Grid>
      <Col>
        <Panel header="Filters" collapsible>
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
        </Panel>
        <Panel header="Houses" bsStyle="info">
          <DataTable
            columns={columns}
            data={data}
          />
        </Panel>
      </Col>
    </Grid>
  </Row>
);

export default Portal;
