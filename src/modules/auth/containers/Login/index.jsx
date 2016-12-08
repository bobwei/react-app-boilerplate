import React from 'react';
import { Panel } from 'react-bootstrap';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';

import LoginForm from '../../components/LoginForm';
import { IsNotAuthenticated } from '../../decorators';
import * as actions from '../../actions';
import Page from '../../components/Page';
import { loginForm } from '../../validations';

const LoginPage = () => {
  const EnhancedLoginForm = compose(
    connect(
      null,
      dispatch => bindActionCreators(actions, dispatch),
    ),
    withProps(({ login }) => ({
      onSubmit(data) {
        return login(data)
          .catch(({ response: { data: { error } } }) => {
            throw new SubmissionError({ _error: error });
          });
      },
    })),
    reduxForm({
      form: 'login',
      validate: loginForm,
    }),
  )(LoginForm);
  return (
    <Page>
      <Panel header="Login">
        <EnhancedLoginForm />
      </Panel>
    </Page>
  );
};

export default compose(
  IsNotAuthenticated,
)(LoginPage);
