import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from '../modules/auth/reducers';

export default combineReducers({
  user: authReducer,
  form: formReducer,
});
