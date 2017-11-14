import React from "react";
import TodoListItem from "./todo_list_item.jsx";
import TodoForm from "./todo_form.jsx";

class todoList extends React.Component{
  constructor(props){
    super(props);
    this.props = props;

  }

  todos(){
    return this.props.todos.map(this.cb.bind(this));
  }


  cb(el){
    return (<TodoListItem todo={el} removeTodo={this.props.removeTodo}/>);
  }

  componentDidMount(){
    return this.props.fetchTodos();
  }


  render() {
    return (
    <div>
      <TodoForm createTodo = {this.props.createTodo} />

      <ul>
        {this.todos()}
      </ul>

    </div>
  );}


}

export default todoList;
