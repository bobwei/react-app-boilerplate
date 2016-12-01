import React from 'react';
import { Row, Grid, Col, Panel } from 'react-bootstrap';

import Table from 'components/Table';

const Portal = () => (
  <Row>
    <Grid>
      <Col>
        <Panel header="Houses" bsStyle="info">
          <Table />
        </Panel>
      </Col>
    </Grid>
  </Row>
);

export default Portal;
