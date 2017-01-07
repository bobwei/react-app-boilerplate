import React from 'react';
import { Row, Grid, Col, Panel, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { reduxForm } from 'redux-form';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import lifecycle from 'recompose/lifecycle';
import shallowEqual from 'recompose/shallowEqual';

import DataTable from 'modules/ui/components/DataTable';
import * as actions from 'modules/parse-server/actions';
import { transformQuery } from 'modules/parse-server/utils';

import { columns as testColumns } from './model';
import { focusSelector } from '../../helpers';
import { dataAndFilterSelector } from '../../selectors';
import Filters from '../../components/Filters';
import styles from './index.scss';

const EnhancedFilters = compose(
  connect(),
  reduxForm({
    onSubmit() {},
  }),
)(Filters);

const Portal = ({ filterFormName, columns }) => {
  const query = transformQuery(['username']);
  const EnhancedDataTable = compose(
    connect(
      dataAndFilterSelector(filterFormName),
      dispatch => bindActionCreators(actions, dispatch),
    ),
    lifecycle({
      componentWillReceiveProps(nextProps) {
        const { fetchData } = nextProps;
        if (!shallowEqual(this.props.where, nextProps.where)) {
          fetchData('_User', query(nextProps.where));
        }
      },
      componentDidMount() {
        const { fetchData, where } = this.props;
        fetchData('_User', query(where));
      },
    }),
    withProps(() => ({
      settings: { keyField: 'objectId' },
      columns,
    })),
  )(DataTable);

  return (
    <Row>
      <Grid>
        <Col md={3} className={styles.columnLeft}>
          <Panel header="Sidebar" className={styles.sidebar}>
            <Nav bsStyle="pills" stacked>
              <LinkContainer to="/admin">
                <NavItem>Users</NavItem>
              </LinkContainer>
            </Nav>
          </Panel>
        </Col>
        <Col md={9}>
          <Panel header="Filters" collapsible onEntered={focusSelector}>
            <EnhancedFilters
              form={filterFormName}
            />
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
  filterFormName: 'filter',
  columns: testColumns,
};

Portal.propTypes = {
  filterFormName: React.PropTypes.string,
  columns: React.PropTypes.arrayOf(React.PropTypes.any),
};

export default Portal;
