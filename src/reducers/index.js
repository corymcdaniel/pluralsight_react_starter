import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  // The name used here defines how they are defined on state:
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;