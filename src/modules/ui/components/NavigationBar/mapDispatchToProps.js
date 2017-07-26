import { logout } from 'redux-modular-auth';
import bindActionCreators from 'redux/lib/bindActionCreators';

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default mapDispatchToProps;
