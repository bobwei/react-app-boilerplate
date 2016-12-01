import React from 'react';
import { Row, Grid, Col, Panel } from 'react-bootstrap';
import R from 'ramda';

import DataTable from 'components/DataTable';
import data from 'components/DataTable/spec.json';

const Portal = () => (
  <Row>
    <Grid>
      <Col>
        <Panel header="Houses" bsStyle="info">
          <DataTable
            columns={[{
              key: 'id',
            }, {
              key: 'name',
            }]}
            data={R.pipe(
              R.path(['results_json', 'search_results']),
              R.map(R.path(['listing'])),
            )(data)}
          />
        </Panel>
      </Col>
    </Grid>
  </Row>
);

export default Portal;
