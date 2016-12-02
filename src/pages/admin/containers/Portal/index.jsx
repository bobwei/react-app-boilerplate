import React from 'react';
import {
  Row, Grid, Col, Panel,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import compose from 'recompose/compose';
import R from 'ramda';

import DataTable from 'components/DataTable';
import Filters from 'components/Filters';

import { data as testData, columns } from './model';
import { focusSelector } from '../../helpers';

const FILTERS_FORM_NAME = 'filters';
const EnhancedFilters = compose(
  reduxForm({
    form: FILTERS_FORM_NAME,
  }),
)(Filters);

const Portal = ({ data, filters: { name } }) => {
  const filteredData = R.pipe(
    R.filter(R.allPass([
      obj => (!!name && R.path(['name'])(obj).indexOf(name) > -1) || (!name && true),
    ])),
  )(data);
  return (
    <Row>
      <Grid>
        <Col>
          <Panel header="Filters" collapsible onEntered={focusSelector}>
            <EnhancedFilters />
          </Panel>
          <Panel header={`Data ( ${filteredData.length} )`} bsStyle="info">
            <DataTable
              columns={columns}
              data={filteredData}
            />
          </Panel>
        </Col>
      </Grid>
    </Row>
  );
};

Portal.defaultProps = {
  filters: {},
  data: testData,
};

Portal.propTypes = {
  filters: React.PropTypes.shape(React.PropTypes.any.isRequired),
  data: React.PropTypes.arrayOf(React.PropTypes.any),
};

export default compose(
  connect(state => ({ filters: getFormValues(FILTERS_FORM_NAME)(state) })),
)(Portal);
