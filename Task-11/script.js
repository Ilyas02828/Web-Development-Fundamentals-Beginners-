const todoName = document.querySelector(".js-name-input");
const todoDueDate = document.querySelector(".js-due-date-input");

const addTodoButton = document.getElementById("js-todo-add-button");

let editIndex = null;

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
function saveToLoacalStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

renderTodoList();

function addTodo() {
  let name = todoName.value;
  let dueDate = todoDueDate.value;

  if (name === "" || dueDate === "") {
    alert("Enter both name and todo due date.");
    return;
  }

  if (editIndex !== null) {
    todoList[editIndex] = { name, dueDate };
    editIndex = null;

    addTodoButton.innerHTML = "Add";
  } else {
    todoList.push({
      name,
      dueDate,
    });
  }

  todoName.value = "";
  todoDueDate.value = "";

  saveToLoacalStorage();
  renderTodoList();
}

function renderTodoList() {
  let todoHTML = "";
  for (let i = 0; i < todoList.length; i++) {
    const { name, dueDate } = todoList[i];

    const html = `
        <div class="card shadow-sm mb-3">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-md-8">
                        <h5 class="mb-2">${name}</h5>
                        <span class="badge bg-primary"> Due Date: ${dueDate} </span>
                    </div>

                    <div class="col-md-4 text-md-end mt-3 mt-md-0">
                        <button class="btn btn-warning btn-sm me-2" onclick="editTodo(${i})"> Edit </button>
                        <button class="btn btn-danger btn-sm" onclick="deleteTodo(${i})"> Delete </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    todoHTML += html;
  }
  document.querySelector(".js-todo-list").innerHTML = todoHTML;
}

function deleteTodo(i) {
  todoList.splice(i, 1);

  saveToLoacalStorage();
  renderTodoList();
}

addTodoButton.addEventListener("click", addTodo);

function editTodo(i) {
  const todo = todoList[i];
  todoName.value = todo.name;
  todoDueDate.value = todo.dueDate;

  editIndex = i;
  addTodoButton.innerHTML = "Save";
}
