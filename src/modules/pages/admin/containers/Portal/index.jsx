/* eslint-disable global-require */
import React from 'react';
import { Row, Grid, Col, Panel, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import compose from 'recompose/compose';
import pure from 'recompose/pure';

import { focusSelector } from '../../helpers';
import styles from './index.scss';
import { EnhancedFilters, EnhancedDataTable } from './enhanceds';

const Portal = ({ filterFormName, columns }) => (
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
          <EnhancedDataTable
            filterFormName={filterFormName}
            settings={{ keyField: 'objectId' }}
            columns={columns}
          />
        </Panel>
      </Col>
    </Grid>
  </Row>
);

Portal.defaultProps = {
  filterFormName: 'filter',
  columns: require('./columns').default,
};

Portal.propTypes = {
  filterFormName: React.PropTypes.string,
  columns: React.PropTypes.arrayOf(React.PropTypes.any),
};

export default compose(
  pure,
)(Portal);
