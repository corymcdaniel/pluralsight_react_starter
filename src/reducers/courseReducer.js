import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      // Take all values, then redefine them inline,
      // then deep copy incoming course:
      return [
        ...state,
        Object.assign({}, action.course)
      ];
    default:
      return state;
  }
}