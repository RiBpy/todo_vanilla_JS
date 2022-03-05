let todos = getSavedTodos()

const filters = {
    searchText: "",
    showCompleted: false
}


const renderTodos = function (todos, filters) {
    let filteredData = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    filteredData = filteredData.filter(function (todo) {
        if (filters.showCompleted) {
            return !todo.status
        } else {
            return true
        }
    })

    const incompleteTodo = filteredData.filter(function (f) {
        return !f.status
    })

    document.querySelector("#data").innerHTML = ""

    const head = document.createElement("h4")
    head.textContent = `You have ${incompleteTodo.length} todos left`
    document.querySelector("#data").appendChild(head)

    filteredData.forEach(function (todo) {
        const TodoEl = CreatEl(todo)
        document.querySelector("#data").appendChild(TodoEl)

    })

}
renderTodos(todos, filters)

document.querySelector("#ad").addEventListener("submit", function (e) {

    e.preventDefault()
    todos.push({
        id: CreateUUID(),
        title: e.target.elements.inp.value,
        status: false
    })
    e.target.elements.inp.value = ""
    SaveTodos(todos)
    renderTodos(todos, filters)

})

document.querySelector("#show-completed").addEventListener("change", function (e) {
    filters.showCompleted = e.target.checked
    renderTodos(todos, filters)
})
document.querySelector("#search").addEventListener("input", function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})
document.querySelector("#sort").addEventListener("input", function (e) {
    console.log(e.target.value)
})

/*
localStorage.setItem("Name","Ri")  //if i write this line as a comment it will work if i did refresh this line for once
console.log(localStorage.getItem("Name"))
const user={
    name:"Ri",
    age:"24"
}

 const josim=JSON.stringify(user)
 console.log(josim)
 const RI=localStorage.setItem("user",josim)
 console.log(localStorage.getItem("user"))
 const U=JSON.parse(josim)
 console.log(`${U.name} is ${U.age}`)
*/