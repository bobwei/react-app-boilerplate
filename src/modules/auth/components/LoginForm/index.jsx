import React from 'react';
import PropTypes from 'prop-types';
import Redirect from 'react-router-dom/Redirect';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import connect from 'react-redux/lib/connect/connect';
import R from 'ramda';
import compose from 'recompose/compose';
import branch from 'recompose/branch';
import renderComponent from 'recompose/renderComponent';

import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

const LoginForm = ({ login }) =>
  <Grid>
    <Row>
      <Col md={4} mdOffset={4}>
        <Button onClick={login} block>
          Login
        </Button>
      </Col>
    </Row>
  </Grid>;

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  branch(R.prop('isAuthenticated'), renderComponent(() => <Redirect to="/" />)),
)(LoginForm);
