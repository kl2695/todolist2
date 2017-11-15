import {connect} from 'react-redux';
import todoList from './todo_list.jsx';
import {allTodos} from '../../reducers/selectors.js';
import {receiveTodo, receiveTodos, removeTodo, fetchTodos, createTodo, deleteTodo, updateTodo} from '../../actions/todo_actions.js';
import {clearErrors} from '../../actions/error_actions.js';
import React from "react";

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state),
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => ({
  createTodo: (todo) => dispatch(createTodo(todo)),
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todoList);
