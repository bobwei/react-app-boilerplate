import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import DataForm from 'modules/ui/components/DataForm';
import SubmitButton from 'modules/ui/components/SubmitButton';

export default compose(
  withProps({
    fields: [{
      name: 'username',
      label: 'Username',
      inputComponent: 'input',
      inputProps: {
        type: 'text',
        autoFocus: true,
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
      submitLabel: 'Login',
    })(SubmitButton),
  }),
)(DataForm);
