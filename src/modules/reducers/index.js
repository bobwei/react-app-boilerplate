import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createReducer as createAuthReducer } from 'redux-modular-auth';
import { createReducer as createModelReducer } from 'redux-modular-models';

import env from 'modules/env/redux';

export default combineReducers({
  form: formReducer,
  env,
  auth: createAuthReducer(),
  models: createModelReducer({
    models: [],
  }),
});
