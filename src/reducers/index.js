import { combineReducers } from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  // The name used here defines how they are defined on state:
  courses
});

export default rootReducer;