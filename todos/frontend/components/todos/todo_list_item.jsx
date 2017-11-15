
import React from 'react';

class TodoListItem extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const todo = this.props.todo;
    const status = todo.done.toString();
    return (

      <li>{todo.title}<button onClick={this.onClickHandler(this.props.updateTodo,todo)}>{status}</button>
        <button onClick={this.onClickHandler(this.props.deleteTodo,todo)}>Remove</button></li>
    );
  }

  onClickHandler(callback,todo){
    return ()=> (
      callback(todo)
    );
  }

}

export default TodoListItem;
