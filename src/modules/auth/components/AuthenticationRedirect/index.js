import Redirect from 'react-router-dom/Redirect';
import R from 'ramda';
import compose from 'recompose/compose';
import mapProps from 'recompose/mapProps';

const AuthenticationRedirect = compose(
  mapProps(
    R.applySpec({
      to: R.compose(next => `/login?next=${next}`, R.path(['match', 'url'])),
    }),
  ),
)(Redirect);

export default AuthenticationRedirect;
