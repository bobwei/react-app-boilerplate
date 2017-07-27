import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import Form from 'react-bootstrap/lib/Form';
import Alert from 'react-bootstrap/lib/Alert';
import connect from 'react-redux/lib/connect/connect';
import reduxForm from 'redux-form/lib/reduxForm';
import Field from 'redux-form/lib/Field';
import formPropTypes from 'redux-form/lib/propTypes';
import compose from 'recompose/compose';

import FieldGroup from 'modules/forms/components/FieldGroup';
import withRequest from 'modules/parse-server/requests/withRequest';

import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';
import redirectIfAuthenticated from '../../hocs/redirectIfAuthenticated';

const LoginForm = ({ handleSubmit, submitting, pristine, error }) =>
  <Grid>
    <Row>
      <Col md={4} mdOffset={4}>
        <Form onSubmit={handleSubmit}>
          {!pristine &&
            error &&
            <Alert bsStyle="danger">
              <p>
                {error}
              </p>
            </Alert>}
          <Field
            name="username"
            component={FieldGroup}
            label="Username"
            formControlProps={{
              type: 'text',
              placeholder: 'Username',
              autoFocus: true,
            }}
          />
          <Field
            name="password"
            component={FieldGroup}
            label="Password"
            formControlProps={{
              type: 'password',
              placeholder: 'Password',
            }}
          />
          <Button type="submit" disabled={submitting} block>
            {submitting ? 'Loading...' : 'Login'}
          </Button>
        </Form>
      </Col>
    </Row>
  </Grid>;

LoginForm.propTypes = {
  ...formPropTypes,
};

export default compose(
  withRequest({ requestPropName: 'apiRequest' }),
  connect(mapStateToProps, mapDispatchToProps),
  redirectIfAuthenticated(),
  reduxForm({
    form: 'login',
    onChange: (values, dispatch, { clearSubmitErrors }) => clearSubmitErrors(),
  }),
)(LoginForm);
