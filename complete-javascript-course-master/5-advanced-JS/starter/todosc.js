 function onLoad() {

     var textVal = document.getElementById("input")
     var sub = document.getElementById("submit");
     sub.addEventListener("click", addToDo)


     //document.querySelector('#submit').addEventListener('click', addToDo)

     // Add function

     function addToDo() {

         // ToDo Div
         var ToDoDiv = document.createElement("div");
         ToDoDiv.classList.add("todo")
         var todoList = document.getElementById("todolist")

         // Create List
         var newLi = document.createElement("li");
         newLi.innerText = textVal.value;
         newLi.classList.add('todo-item');
         ToDoDiv.appendChild(newLi);

         //  Append to list
         todoList.appendChild(ToDoDiv)
     }
 }