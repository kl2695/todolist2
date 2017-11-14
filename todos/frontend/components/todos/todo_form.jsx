import React from 'react';
import configureStore from '../../store/store.js';

class TodoForm extends React.Component{

  constructor(props){
    super(props);
    this.receiveTodo = this.props.receiveTodo;

    this.state = {
      title: "",
      body: "",
      id: ""
    };
    this.store = configureStore();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    let id = document.getElementById('id').value;
    this.setState({id: id, title: title, body: body}, this.callback({id: id, title: title, body: body}) );
  }

  callback(todo){
    return () => this.receiveTodo(todo);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input id="title"type="text"/>
          </label>
          <label>Body
            <input id="body" type="text"/>
          </label>
          <input id="id" type="hidden" value={this.uniqueId()}></input>
          <input type="submit" value="submit"/>

        </form>
      </div>
    );
  }

  uniqueId(){
    return new Date().getTime();
  }
}

export default TodoForm;
