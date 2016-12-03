import React from 'react';
import {
  Row, Grid, Col, Panel,
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import DataTable from 'components/DataTable';
import Filters from 'components/Filters';

import { data as testData, columns as testColumns } from './model';
import { focusSelector } from '../../helpers';

const FILTERS_FORM_NAME = 'filters';

const Portal = ({ data, columns }) => {
  const EnhancedFilters = compose(
    connect(),
    reduxForm({
      form: FILTERS_FORM_NAME,
      // eslint-disable-next-line no-unused-vars
      onSubmit(submittedData) {},
    }),
  )(Filters);

  const EnhancedDataTable = compose(
    connect(state => ({ filters: getFormValues(FILTERS_FORM_NAME)(state) })),
    withProps(({ filters }) => ({
      filters,
      columns,
      data,
    })),
  )(DataTable);

  return (
    <Row>
      <Grid>
        <Col>
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
  data: testData,
  columns: testColumns,
};

Portal.propTypes = {
  data: React.PropTypes.arrayOf(React.PropTypes.any),
  columns: React.PropTypes.arrayOf(React.PropTypes.any),
};

export default Portal;
