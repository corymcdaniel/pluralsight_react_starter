import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  // The name used here defines how they are defined on state:
  courses,
  authors
});

export default rootReducer;