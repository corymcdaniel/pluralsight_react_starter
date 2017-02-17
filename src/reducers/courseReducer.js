import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;

      // Take all values, then redefine them inline,
      // then deep copy incoming course:
      /*return [
        ...state,
        Object.assign({}, action.course)
      ];*/
    default:
      return state;
  }
}