// Read existing notes from localStorage
const getSavedTodos=function(){
    const todoJSON=localStorage.getItem("todos")
if(todoJSON!==null){
    return JSON.parse(todoJSON)
}else{
    return []
}
}
// Save the todos to localStorage
const SaveTodos=function(todos){
    localStorage.setItem("todos",JSON.stringify(todos))  
}
const removeTodo=function(id){
const TodoIndex=todos.findIndex(function(todo){
      return todo.id===id
})
if(TodoIndex >-1){
    todos.splice(TodoIndex ,1)
}
}
const toggleTodo=function(id){
    const todo=todos.find(function(todo){
        return todo.id===id
})
 if(todo!==undefined){
    todo.status=!todo.status}
 }
// Generate todo for 
const CreatEl=function(todo){
        const TodoEl=document.createElement("div")
        const TextEl=document.createElement("span")
        const button=document.createElement("button")
        const checkbox=document.createElement("input")
//checkbox set up
checkbox.setAttribute("type", "checkbox")
checkbox.checked=todo.status
TodoEl.appendChild(checkbox)
checkbox.addEventListener("change",function(){
    toggleTodo(todo.id)
    SaveTodos(todos)
    renderTodos(todos , filters)
})

//Text set up
TextEl.textContent=todo.title
TodoEl.appendChild(TextEl)
//button set up
button.textContent="X"
TodoEl.appendChild(button)
button.addEventListener("click",function(){
    removeTodo(todo.id)
    SaveTodos(todos)
    renderTodos(todos,filters)
})
      
    return TodoEl
}
//sorting


function CreateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  