//  get form from html
let getForm = document.querySelector("form");

// when form is submitted , createTodo is called
getForm.addEventListener("submit", createTodo);

// get output div from html
let getoutput = document.getElementById("output");

//  create a array where the result will store
let allTodos = [];

// function in which value are get and push into array
function createTodo(event) {
  // stop the  page from reloading
  event.preventDefault();

  //   get value from user
  let value = getForm.todo.value;
  console.log(value);

  //   push values to alltodos array
  allTodos.push({ todoValue: value, isCompleted: false });
  console.log(allTodos);

  // empty input box in every atempted
  getForm.todo.value = "";

  //   call the render function
  render();

}

// function wheere the result will show on screen
function render() {
  // clear previous todos
  getoutput.innerHTML = "";

  console.log(allTodos)

  // create a ul
  let ul = document.createElement("ul");

  // for loop
  for (let index = 0; index < allTodos.length; index++) {
    const element = allTodos[index];
    let li = document.createElement("li");
    li.textContent = element.todoValue;


    // function in which value will be removed/deleted
    // create a button
    let button = document.createElement("button");
    // add a onClick listner to this button, pass index to this onclick listner
    button.addEventListener("click", () => deleteTodo(index));
    button.innerText = "X";

    if(element.isCompleted){
      li.style.textDecoration = "line-through";
    }

    // also append a button here
    li.appendChild(button);

    ul.appendChild(li);

    // update todo
    let editButton = document.createElement("button");
    editButton.addEventListener("click", () => updateTodo(index));
    editButton.innerText = "edit";
    li.append(editButton);

    // complete todo
    let completeButton = document.createElement("button");
    completeButton.addEventListener("click", () => completeTodo(index));
    completeButton.innerText = "complete";
    li.append(completeButton);

  
  }

  // append ul in a main div
  getoutput.appendChild(ul);
}

// delete function
function deleteTodo(index) {
  let allDeleteTodos = allTodos.filter((item, i) => {
    return i !== index;
  });
  allTodos = allDeleteTodos;
  render();
}

// update function
function updateTodo(index) {
  let edittodo = prompt("enter updated value :");
  let updatedtodos = allTodos.map((item, i) => {
    if (i === index)
      return {
        ...item,
        todoValue: edittodo,
      };
    return item;
  });

  allTodos = updatedtodos;

  render();
}

// complete function
function completeTodo(index) {
  let newallTodos = allTodos.map((item, i) => {
    if (i === index) {
      return { ...item,
         isCompleted: !item.isCompleted };
    }
    return item;


 });

 allTodos =newallTodos
  render();
}



// https://rickandmortyapi.com/api/character ------------- link of rick & morty api


// create  an array, where data will store here
let data = [];

// get button from html file
const fetchButton = document.querySelector('button');

// add event by clicking button then call fetchDataFromServer function
fetchButton.addEventListener('click',fetchDataFromServer)

// get main div from html file
const main = document.querySelector('.main');

// fetchDataFromServer function 
// async is used because we are using await & without async , await render error
async function fetchDataFromServer(){

    // await is used because of server takes time to fetch data to client .
    // fetch is used to fetch data to server.
    let response = await fetch("https://rickandmortyapi.com/api/character")

    // json is used to fetch data in javascript formet
    data = await response.json();
    
    // create ul element
    const ul = document.createElement('ul');

// for loop
    for (let index = 0; index < data.results.length; index++) {
        const element = data.results[index];
        console.log(element)

        // create li element in ul 
        const li = document.createElement('li');

        // create img element where images will store here
        const image = document.createElement('img')

        // append images into lists  & lists to ul
        image.src = element.image
        li.innerText = element.name
        li.appendChild(image);
        ul.appendChild(li)
    }

    // atlast append ul to main div

    main.appendChild(ul)
}