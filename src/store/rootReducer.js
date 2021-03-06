import { combineReducers } from 'redux';

import post from './post/reducers';

const rootReducer = combineReducers({
  post,
});

export default rootReducer;
