import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/error_actions';

export const errorReducer = function(state=[], action){
  switch(action.type){

    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];

    default:
      return state;
  }
};
