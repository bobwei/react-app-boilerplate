import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import { persistStore, autoRehydrate } from 'redux-persist';

import rootReducer from 'modules/reducers';

export default (initialState, history, callback) => {
  const middlewares = [thunkMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];
  if (canUseDOM) {
    enhancers.push(autoRehydrate());
  }

  const store = createStore(rootReducer, initialState, compose(...enhancers));

  if (canUseDOM) {
    persistStore(store, { whitelist: [] }, callback);
  }

  return store;
};
