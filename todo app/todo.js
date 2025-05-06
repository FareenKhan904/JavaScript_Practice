let getForm = document.querySelector("form");

getForm.addEventListener("submit", createTodo);

let getOutPut = document.querySelector(".output");

let allTodos = [];

// render function
function render() {
  getOutPut.innerHTML = "";

  // create toddo
  let ul = document.createElement("ul");

  for (let index = 0; index < allTodos.length; index++) {
    const element = allTodos[index];
    let li = document.createElement("li");
    li.textContent = element.todovalues;

    // style on completion of todo items
    if(element.isComplete){
        li.style.textDecoration = "line-through";
      }
    ul.appendChild(li);

    // delete todo
    let button = document.createElement("button");
    button.addEventListener("click", () => deleteTodo(index));
    button.innerText = "X";
    li.appendChild(button);

    // update toddoo
    let updateButton = document.createElement("button");
    updateButton.addEventListener("click", () => updateTodo(index));
    updateButton.innerText = "Edit";
    li.appendChild(updateButton);

    // complete  todo
    let completeButton = document.createElement("button");
    completeButton.addEventListener("click", () => completeTodo(index));
    completeButton.innerText = "complete";
    li.appendChild(completeButton);

  }

  // append ul into empty div which is in main html file
  getOutPut.appendChild(ul);
}

//1.  create function
function createTodo(event) {
  event.preventDefault();

  let values = getForm.todo.value;
  console.log(values);

  allTodos.push({
    todovalues: values,
    isComplete: false,
  });

  console.log(allTodos);

  getForm.todo.value = "";

  render();
}

// 2. delete function
function deleteTodo(index) {
  let allDeleteTodos = allTodos.filter((item, i) => {
    return i != index;
  });

  allTodos = allDeleteTodos;

  render();
}

// 3. update function
function updateTodo(index) {
  let allEditTodos = prompt("Enter a new value");
  let allUpdateTodos = allTodos.map((item, i) => {
    if (i == index)
      return {
        ...item,
        todovalues: allEditTodos,
      };
    return item;
  });

  allTodos = allUpdateTodos;

  render();
}

//  4. complete function
function completeTodo(index) {
  let completeTodo = allTodos.map((item, i) => {
    if (i == index)
      return {
        ...item,
        isComplete: !item.isComplete,
      };
    return item;
  });

  allTodos = completeTodo;

  render();
}
