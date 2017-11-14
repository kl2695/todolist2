import {connect} from 'react-redux';
import todoList from './todo_list.jsx';
import {allTodos} from '../../reducers/selectors.js';
import {receiveTodo, receiveTodos, removeTodo, fetchTodos} from '../../actions/todo_actions.js';
import React from "react";

const mapStateToProps = (state) => {
  return {
    todos: allTodos(state)
  };
};

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo)),
  receiveTodos: (todos) => dispatch(receiveTodos(todos)),
  removeTodo: (todo) => dispatch(removeTodo(todo)),
  fetchTodos: (todos) => dispatch(fetchTodos(todos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(todoList);
