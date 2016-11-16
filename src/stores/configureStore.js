import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

export default (initialState) => {
  const middlewares = [thunkMiddleware];
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
  );
};
