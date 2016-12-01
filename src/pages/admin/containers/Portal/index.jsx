import React from 'react';
import { Row, Grid, Col, Panel } from 'react-bootstrap';
import R from 'ramda';

import DataTable from 'components/DataTable';
import data from 'components/DataTable/spec.json';

const Portal = () => (
  <Row>
    <Grid>
      <Col>
        <Panel header="Filters" collapsible>
          Filters
        </Panel>
        <Panel header="Houses" bsStyle="info">
          <DataTable
            columns={[{
              key: 'id',
            }, {
              key: 'user.thumbnail_url',
              label: 'Host',
              cell: (r, k) => (
                <img src={R.path(R.split('.')(k))(r)} role="presentation" />
              ),
            }, {
              key: 'name',
              label: 'Name',
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
