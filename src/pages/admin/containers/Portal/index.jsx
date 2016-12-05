import React from 'react';
import { Row, Grid, Col, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
// import { createSelector } from 'reselect';
import R from 'ramda';

import DataTable from 'components/DataTable';
import Filters from 'components/Filters';

import { columns as testColumns } from './model';
import { focusSelector } from '../../helpers';
import { dataSelector } from '../../selectors';

const FILTERS_FORM_NAME = 'filters';

const Portal = ({ columns }) => {
  const EnhancedFilters = compose(
    connect(),
    reduxForm({
      form: FILTERS_FORM_NAME,
      // eslint-disable-next-line no-unused-vars
      onSubmit(submittedData) {},
    }),
  )(Filters);

  const EnhancedDataTable = compose(
    connect((state) => {
      const filters = getFormValues(FILTERS_FORM_NAME)(state) || {};
      const data = dataSelector(state).data;
      const filteredData = R.filter(R.pipe(
        R.prop('name'),
        R.test(new RegExp(filters.q, 'i')),
      ))(data);
      return { data: filteredData };
    }),
    withProps(() => ({
      columns,
    })),
  )(DataTable);

  return (
    <Row>
      <Grid>
        <Col md={12}>
          <Panel header="Filters" collapsible onEntered={focusSelector}>
            <EnhancedFilters />
          </Panel>
          <Panel header={'Data'} bsStyle="info">
            <EnhancedDataTable />
          </Panel>
        </Col>
      </Grid>
    </Row>
  );
};

Portal.defaultProps = {
  columns: testColumns,
};

Portal.propTypes = {
  columns: React.PropTypes.arrayOf(React.PropTypes.any),
};

export default Portal;
