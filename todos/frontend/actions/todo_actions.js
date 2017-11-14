import APIUtil from '../util/todo_api_util.js';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';


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

export const fetchTodos = function(){
  return function(dispatch){
    return APIUtil().then((todos) => dispatch(receiveTodos(todos)));
  };
};

// export const fetchTodos = () => (dispatch) => (
//   APIUtil().then(todos => dispatch(receiveTodos(todos)))
// );
