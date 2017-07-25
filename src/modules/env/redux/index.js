import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment';

const initialState = canUseDOM ? window.__ENV__ : {};

export default (state = initialState) => state;
