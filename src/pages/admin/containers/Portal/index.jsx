import React from 'react';
import {
  Row, Grid, Col, Panel,
} from 'react-bootstrap';

import DataTable from 'components/DataTable';
import Filters from 'components/Filters';

import { data, columns } from './model';

const Portal = () => (
  <Row>
    <Grid>
      <Col>
        <Panel header="Filters" collapsible>
          <Filters />
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
