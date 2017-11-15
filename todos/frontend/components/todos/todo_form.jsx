import React from 'react';
import configureStore from '../../store/store.js';

class TodoForm extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      title: "",
      body: "",
      id: ""
    };
    this.store = configureStore();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    let id = document.getElementById('id').value;
    this.props.createTodo({id: id, title: title, body: body}).then(
      () => {
        this.setState({title:'', body:''});
        this.props.clearErrors();
      }
    );
  }

  handleChange(event){
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    this.setState({title:title, body:body});

  }


  render(){
    return(
      <div>
        {this.props.errors}

        <form onSubmit={this.handleSubmit}>
          <label>Title
            <input id="title"type="text"onChange={this.handleChange} value={this.state.title}/>
          </label>
          <label>Body
            <input id="body" type="text" onChange={this.handleChange} value={this.state.body}/>
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
