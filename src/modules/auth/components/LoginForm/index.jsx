import React from 'react';
import PropTypes from 'prop-types';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import connect from 'react-redux/lib/connect/connect';
import compose from 'recompose/compose';

import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';
import redirectIfAuthenticated from '../../hocs/redirectIfAuthenticated';

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
  redirectIfAuthenticated(),
)(LoginForm);
