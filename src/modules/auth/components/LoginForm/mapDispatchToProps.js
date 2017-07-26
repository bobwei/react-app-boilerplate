import { login } from 'redux-modular-auth';

const mapDispatchToProps = dispatch => ({
  login: () =>
    dispatch(login({ objectId: 'objectId', sessionToken: 'sessionToken' })),
});

export default mapDispatchToProps;
