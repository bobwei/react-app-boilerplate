import React from 'react';
import { Panel } from 'react-bootstrap';
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, SubmissionError } from 'redux-form';

import SignupForm from '../../components/SignupForm';
import { IsNotAuthenticated } from '../../decorators';
import * as actions from '../../actions';
import Page from '../../components/Page';

const SignupPage = () => {
  const EnhancedSignupForm = compose(
    connect(
      null,
      dispatch => bindActionCreators(actions, dispatch),
    ),
    withProps(({ signup }) => ({
      onSubmit(data) {
        return signup(data)
          .catch(() => {
            throw new SubmissionError({ _error: 'Signup Error' });
          });
      },
    })),
    reduxForm({
      form: 'signup',
    }),
  )(SignupForm);
  return (
    <Page>
      <Panel header="Signup">
        <EnhancedSignupForm />
      </Panel>
    </Page>
  );
};

export default compose(
  IsNotAuthenticated,
)(SignupPage);
