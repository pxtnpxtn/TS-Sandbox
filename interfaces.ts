interface Todo {
  title: string;
  text: string;
}

const showToDo = (todo: Todo) => {
  console.log(`${todo.title}: ${todo.text}`);
};

let myTodo = {
  title: "Trash",
  text: "Take out trash"
};

showToDo(myTodo);
