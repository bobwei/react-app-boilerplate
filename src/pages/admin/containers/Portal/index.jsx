import React from 'react';
import { Row, Grid, Col, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import DataTable from 'components/DataTable';
import Filters from 'components/Filters';

import { columns as testColumns } from './model';
import { focusSelector } from '../../helpers';
import { visibleDataSelector } from '../../selectors';

const FILTERS_FORM_NAME = 'filters';

const Portal = ({ columns }) => {
  const EnhancedFilters = compose(
    connect(),
    reduxForm({
      form: FILTERS_FORM_NAME,
      onSubmit() {},
    }),
  )(Filters);

  const EnhancedDataTable = compose(
    connect(visibleDataSelector(FILTERS_FORM_NAME)),
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
