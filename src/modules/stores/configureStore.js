import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';
import { persistStore, autoRehydrate } from 'redux-persist';

import rootReducer from 'modules/reducers';

export default (initialState, callback = () => {}) => {
  const middlewares = [thunkMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];
  if (canUseDOM) {
    enhancers.push(autoRehydrate());
  }

  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  if (canUseDOM) {
    persistStore(store, { whitelist: ['auth'] }, callback);
  } else {
    callback();
  }

  return store;
};
