
import React from 'react';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
    this.todo = this.props.todo;
    this.removeTodo = this.props.removeTodo;

  }

  render(){
    return (
      <li>{this.props.todo.title} <button onClick={this.callback(this.props.todo)}>Remove</button></li>
    );
  }

  callback(todo){
    return () => this.removeTodo(todo);
  }
}

export default TodoListItem;
