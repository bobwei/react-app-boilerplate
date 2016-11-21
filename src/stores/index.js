import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import canUseDOM from 'fbjs/lib/ExecutionEnvironment';
import { persistStore, autoRehydrate } from 'redux-persist';

import rootReducer from '../reducers';

export default (initialState) => {
  const middlewares = [thunkMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];
  if (canUseDOM) {
    enhancers.push(autoRehydrate());
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(...enhancers),
  );

  if (canUseDOM) {
    persistStore(store, () => {
      console.log('autoRehydrate completed');
    });
  }

  return store;
};
