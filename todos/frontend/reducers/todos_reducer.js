import {RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO, UPDATE_TODO} from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};



const todosReducer = (state=initialState, action) =>{

  switch(action.type){

    case RECEIVE_TODOS:
      const newState = {};
      action.todos.forEach((el, idx) => {
        newState[el.id] = el;
      });
      return newState;

    case RECEIVE_TODO:
      const newState2 = {};
      newState2[action.todo.id] = action.todo;

      return merge({}, state, newState2);

    case REMOVE_TODO:
      const newState3 = merge({},state);
      delete newState3[action.todo.id];
      return newState3;

    case UPDATE_TODO:
      const newState4 = merge({},state);
      action.todo.done = !action.todo.done;
      return newState4;

    default:
      return state;
  }
};

export default todosReducer;
