/* eslint-disable no-underscore-dangle */
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

const initialState = (canUseDOM) ? window.__ENVS__ : {};

export default (state = initialState) => state;
