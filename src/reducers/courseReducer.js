import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function courseReducer(state = initialState.courses, action) {
  switch(action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE_SUCCESS:
      return [...state, Object.assign({}, action.course)];

    case types.UPDATE_COURSE_SUCCESS:
      return [
        //creates new array of the filtered state
        ...state.filter(course => course.id !== action.course.id),
        Object.assign({}, action.course)
      ];
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