import compose from 'recompose/compose';
import withProps from 'recompose/withProps';

import DataForm from 'components/DataForm';

export default compose(
  withProps({
    fields: [{
      name: 'username',
      label: '帳號',
      inputComponent: 'input',
      inputProps: {
        type: 'text',
        autoFocus: true,
      },
    }, {
      name: 'password',
      label: '密碼',
      inputComponent: 'input',
      inputProps: {
        type: 'password',
      },
    }],
  }),
)(DataForm);
