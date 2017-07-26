import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import env from 'modules/env/redux';

export default combineReducers({
  form: formReducer,
  env,
});
