import ApiUtil from '../util/todo_api_util.js';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
import {receiveErrors} from './error_actions';


const util = new ApiUtil();

export const receiveTodo = (todo) => {

  return {
  type: RECEIVE_TODO,
  todo: todo
  };
};

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos: todos
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo: todo
});

export const changeTodo = (todo) => ({
  type: UPDATE_TODO,
  todo: todo
});

export const fetchTodos = function(){
  return function(dispatch){
    console.log(util.fetchTodos);
    return util.fetchTodos().then((todos) => dispatch(receiveTodos(todos)));
  };
};

export const createTodo = function(todo){
  return function(dispatch){
    return util.createTodo(todo).then(
      (todo2) => dispatch(receiveTodo(todo2)),
      (err) => dispatch(receiveErrors(err.responseJSON)));
  };
};

export const deleteTodo = function(todo){
  return function(dispatch){
    return util.deleteTodo(todo).then(
      todo3=> dispatch(removeTodo(todo3)),
      err => dispatch(receiveErrors(err.responseJSON)));


  };
};


export const updateTodo = function(todo){
  return function(dispatch){
    return util.updateTodo(todo).then(
      todo3=> dispatch(changeTodo(todo3)),
      err => dispatch(receiveErrors(err.responseJSON)));


  };
};

// export const fetchTodos = () => (dispatch) => (
//   APIUtil().then(todos => dispatch(receiveTodos(todos)))
// );
