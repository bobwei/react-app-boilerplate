import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import env from 'modules/env/redux';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  env,
});
