const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".submit-style");
const todoList = document.querySelector(".todo-list");
const searchTodoInput = document.querySelector(".search-input");




todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click" , trashInput);
document.addEventListener("DOMContentLoaded" , getTodos);
searchTodoInput.addEventListener("keyup" , search)


// action get work 

function addTodo(event) {

    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("label");
    
    newTodo.setAttribute("for" , "checkbox-todo");
    newTodo.innerText = todoInput.value;
    

    saveLocalTodo(todoInput.value);


    const completedCheckBox = document.createElement("input");
    completedCheckBox.setAttribute("type" , "checkbox");
    completedCheckBox.classList.add("checkbox-todo");
    todoDiv.appendChild(completedCheckBox);

    newTodo.classList.add("todo-label");
    todoDiv.appendChild(newTodo);
    todoInput.value = "";
    
    
    


    const trashButton = document.createElement("button");
    trashButton.innerHTML = "<i class='far fa-trash-alt'></i>";
    trashButton.classList.add("button-trash");
    todoDiv.appendChild(trashButton);


    todoList.appendChild(todoDiv);
    

}

function search (event){

    event.preventDefault();

    if(search.value){
        let filterTodos =todos.filter(todo => todo.label.includes(search.value))

        todoList.appendChild(filterTodos);
    }

    }

function trashInput (event){
    const item = event.target;
    console.log(item.parentElement)
    if(item.classList[0] === "button-trash"){
        const todo = item.parentElement;
        removeLocalTodo(todo);
        todo.remove();
       
    }
    if(item.classList[0] ==="checkbox-todo"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}



function saveLocalTodo(todo){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))

    // console.log(todos);
}
     

function removeLocalTodo(todo){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    };

    const todoIndex = todo.children[0].innerText;
    todos.splice(todo.indexOf(todoIndex), 1);
    
    // console.log(todos);
    // todos.filter(x => x!= todo)
    // localStorage.setItem("todos", "");
    localStorage.setItem("todos", JSON.stringify(todos));console.log(localStorage);
    // console.log(todos);
    // localStorage.setItem("todos", "");
    
}
function getTodos(){
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    };
    todos.forEach(function(todo){

        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");

        const newTodo = document.createElement("label");
        newTodo.setAttribute("for" , "checkbox-todo");
        newTodo.innerText = todo;

        const completedCheckBox = document.createElement("input");
        completedCheckBox.setAttribute("type" , "checkbox");
        completedCheckBox.classList.add("checkbox-todo");
        todoDiv.appendChild(completedCheckBox);

        newTodo.classList.add("todo-label");
        todoDiv.appendChild(newTodo);

        const trashButton = document.createElement("button");
        trashButton.innerHTML = "<i class='far fa-trash-alt'></i>";
        trashButton.classList.add("button-trash");
        todoDiv.appendChild(trashButton);


        todoList.appendChild(todoDiv);

    })


}



let countTime = new Date("June 15, 2022 00:00:00").getTime();
 
let x = setInterval(function(){

    let dateTimeNow = new Date().getTime();
    let distance = countTime - dateTimeNow;
    

    let hours = Math.floor(distance / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").innerHTML= (hours<10)? '0' +hours : hours;
    document.getElementById("minutes").innerHTML= (minutes<10)? '0' +minutes : minutes;
    document.getElementById("seconds").innerHTML= (seconds<10)? '0' +seconds : seconds;
    

  
} , 1000 );
