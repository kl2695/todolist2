import React from "react";
import TodoListItem from "./todo_list_item.jsx";
import TodoForm from "./todo_form.jsx";

class todoList extends React.Component{
  constructor(props){
    super(props);

  }

  todos(){
    return this.props.todos.map(this.cb.bind(this));
  }


  cb(el){
    return (<TodoListItem todo={el} deleteTodo={this.props.deleteTodo} updateTodo={this.props.updateTodo}/> );
  }

  componentDidMount(){
    return this.props.fetchTodos();
  }


  render() {
    return (
    <div>
      <TodoForm createTodo={this.props.createTodo} errors={this.props.errors} clearErrors={this.props.clearErrors}/>

      <ul>
        {this.todos()}
      </ul>

    </div>
  );}


}

export default todoList;
