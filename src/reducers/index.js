import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import authReducer from 'modules/auth/reducers';
import env from 'modules/env/redux';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  user: authReducer,
  env,
});
