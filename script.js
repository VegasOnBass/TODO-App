const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

const todos = [] 


function renderTodo(todo){
  
  const id = todos.indexOf(todo)
  
  //render a single todo
  let li = document.createElement('li')
  li.innerHTML = '<input class="checkbox todo-checkbox" type=checkbox onClick=toggleCheck('+id+') '+todo.isChecked+' />' 
  + '<button onClick=deleteTodo('+id+') class=todo-delete >Delete</button>'
  + '<span class=todo-text >' + todo.text

  list.appendChild(li)  
}

function render(){
  //render the todos in memory to the page
  list.innerHTML = ''

  todos.map(renderTodo)

  //update counts
  itemCountSpan.innerHTML = ''
  itemCountSpan.innerHTML = todos.length
  

  const unchecked =  todos.filter(todo => todo.isChecked === "")
  uncheckedCountSpan.innerHTML = ''
  uncheckedCountSpan.innerHTML = unchecked.length
}


function newTodo() {

  let text = prompt("Please enter new ToDO", "ToDo");
  let todo;
  if (text == null || text == "") {
    return
  } else {
    todo = { text, isChecked: ''}
  }
  todos.push(todo)
  console.log(todos)
  return render() 
}

function deleteTodo(id) {
  
  console.log(todos[id])
  
  todos.splice(id, 1)

  console.log(todos)

  return render()

}

function toggleCheck(id) {

  if (todos[id].isChecked == '' ) {
    todos[id].isChecked = 'checked'

  }else {
    todos[id].isChecked = ''
  }

  console.log(todos)
  
  return render()
}