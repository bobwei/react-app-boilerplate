import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';

import authReducer from '../modules/auth/reducers';

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  user: authReducer,
});
