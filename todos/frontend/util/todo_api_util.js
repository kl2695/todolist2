


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
}

export default ApiUtil;
