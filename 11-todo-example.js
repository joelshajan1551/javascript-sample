const todoList = [
  {
    name: "make dinner",
    dueDate: "04-05-2023",
  },
  {
    name: "wash dishes",
    dueDate: "20-12-2202",
  },
];

function renderTodoList() {
  let todoListHtml = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject;

    const html = `<div>${name}</div>
    <div> ${dueDate} </div>
    <button onclick="
      todoList.splice(${i}, 1)
      renderTodoList();";
      >Delete
    </button>`;
    todoListHtml += html;
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHtml;
}

function addTodo() {
  const inputElement = document.querySelector(".js-todoNameInput");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-tododateinput");

  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate });

  inputElement.value = "";

  renderTodoList();
}
