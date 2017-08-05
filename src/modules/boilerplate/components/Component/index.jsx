import React from 'react';
import 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import withRouter from 'react-router-dom/withRouter';
import connect from 'react-redux/lib/connect/connect';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import withRequest from 'modules/parse-server/requests/withRequest';
import withLoadingState from 'modules/utils/hocs/withLoadingState';
import withLoadingEffect from 'modules/utils/hocs/withLoadingEffect';
import applyLoading from 'modules/utils/functions/applyLoading';
import updateOnMount from 'modules/utils/hocs/updateOnMount';

import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

const Component = () =>
  <Grid>
    <Row>
      <Col md={12}>Component</Col>
    </Row>
  </Grid>;

Component.propTypes = {};

Component.defaultProps = {};

export default compose(
  withRouter,
  withRequest(),
  withLoadingState(),
  withLoadingEffect(),
  connect(mapStateToProps, mapDispatchToProps),
  withProps(applyLoading(['update'])),
  updateOnMount(),
)(Component);
