import React from 'react';
import 'prop-types';
import Form from 'react-bootstrap/lib/Form';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import withRouter from 'react-router-dom/withRouter';
import connect from 'react-redux/lib/connect/connect';
import reduxForm from 'redux-form/lib/reduxForm';
import Field from 'redux-form/lib/Field';
import formPropTypes from 'redux-form/lib/propTypes';
import createValidation from 'js-app-modules/lib/forms/validations/createValidation';
import createRequiredValidations from 'js-app-modules/lib/forms/validations/createRequiredValidations';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import FieldGroup from 'modules/forms/components/FieldGroup';
import withRequest from 'modules/parse-server/requests/withRequest';
import withLoadingState from 'modules/utils/hocs/withLoadingState';
import withLoadingEffect from 'modules/utils/hocs/withLoadingEffect';
import applyLoading from 'modules/utils/functions/applyLoading';
import updateOnMountAndOnChange from 'modules/utils/hocs/updateOnMountAndOnChange';

import mapStateToProps from './mapStateToProps';
import mapDispatchToProps from './mapDispatchToProps';

const Component = ({ handleSubmit, submitting }) =>
  <Form onSubmit={handleSubmit}>
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
    <FormGroup>
      <Button type="submit" disabled={submitting} block>
        {submitting ? 'Loading...' : 'Submit'}
      </Button>
    </FormGroup>
  </Form>;

Component.propTypes = {
  ...formPropTypes,
};

Component.defaultProps = {};

export default compose(
  withRouter,
  withRequest(),
  withLoadingState(),
  withLoadingEffect(),
  connect(mapStateToProps, mapDispatchToProps),
  withProps(applyLoading(['update'])),
  reduxForm({
    form: 'form',
    validate: createValidation([
      createRequiredValidations([['username'], ['password']]),
    ]),
  }),
  updateOnMountAndOnChange(),
)(Component);
