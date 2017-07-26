import { createStructuredSelector } from 'reselect';
import { isAuthenticated } from 'redux-modular-auth';

const mapStateToProps = createStructuredSelector({
  isAuthenticated,
});

export default mapStateToProps;
