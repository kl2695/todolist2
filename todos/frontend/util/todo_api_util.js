


class ApiUtil {

  constructor(){

  }

  fetchTodos(){ return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/todos'
    });
  }

  createTodo(todo){ return $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/todos',
    data:{todo: todo},
    dataType: "JSON"
  });
  }

  deleteTodo(todo){
    return $.ajax({
      method: 'DELETE',
      url: `http://localhost:3000/api/todos/${todo.id}`,
      dataType: "JSON"
    });
  }

  updateTodo(todo){
    todo.done = !todo.done;
    console.log(todo.done);
    return $.ajax({
      method: 'PATCH',
      url: `http://localhost:3000/api/todos/${todo.id}`,
      data: {todo: todo},
      dataType: "JSON"
    });
  }
}

export default ApiUtil;
