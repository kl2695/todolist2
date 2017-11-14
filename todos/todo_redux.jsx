import configureStore from './frontend/store/store.js';
import React from 'react';
import ReactDOM from 'react-dom';
import {receiveTodo, receiveTodos, fetchTodos} from './frontend/actions/todo_actions';
import App from './frontend/components/app.jsx';
import Root from './frontend/components/root.jsx';
import {allTodos} from './frontend/reducers/selectors.js';
import ApiUtil from './frontend/util/todo_api_util.js';


const util = new ApiUtil();
document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.store = store;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
  window.createTodo = util.createTodo;
  const rootEl = document.getElementById("content");
  ReactDOM.render(<Root store = {store}/>, rootEl);
});
