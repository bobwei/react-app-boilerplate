import { logout } from 'redux-modular-auth';

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default mapDispatchToProps;
