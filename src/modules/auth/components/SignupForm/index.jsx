import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import DataForm from 'components/DataForm';
import SubmitButton from 'components/SubmitButton';

export default compose(
  withProps({
    fields: [{
      name: 'email',
      label: 'Email',
      inputComponent: 'input',
      inputProps: {
        type: 'email',
        autoFocus: true,
      },
    }, {
      name: 'username',
      label: 'Username',
      inputComponent: 'input',
      inputProps: {
        type: 'text',
      },
    }, {
      name: 'password',
      label: 'Password',
      inputComponent: 'input',
      inputProps: {
        type: 'password',
      },
    }],
    submitButton: withProps({
      submitLabel: 'Signup',
    })(SubmitButton),
  }),
)(DataForm);
