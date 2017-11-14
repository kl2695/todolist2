
export const allTodos = function(state){
  let arr = [];
  Object.keys(state.todos).forEach((key, idx) => {
    arr.push(state.todos[key]);
  });
  return arr;
};
