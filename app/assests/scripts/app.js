//Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const todotext = document.querySelector('.todo-text')
const filterOption = document.querySelector('.filter-todo')

//Event Listener
todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

//Functions
//Function for create li
function addTodo(event) {
  //Prevent Form from being Submitted
	event.preventDefault()
	
	//Create ToDo Div
	const toDoDiv = document.createElement('div') //created a Div
	toDoDiv.classList.add('todo') //Added a class

	//Create li
	const toDoText = document.createElement('li') //Created li 
	toDoText.classList.add('todo-text') //Added a class

	//Acts upon the field is emply or not
	if (todoInput.value == "") {
		alert('Insert a todo Please')
		return false
	}
	else {
		toDoText.innerText = todoInput.value
		todoInput.value =''
	}

	toDoDiv.appendChild(toDoText) //Put li inside a div

	//CheckMark Button
	const completedButton = document.createElement('button') //Created Button
	completedButton.classList.add('complete') //Added Class
	completedButton.innerHTML = `<i class="fas fa-check"></i>` //Seted Icon
	toDoDiv.appendChild(completedButton) //Put it inside Parent Div

	//Delete Button
	const deleteButton = document.createElement('button') //Created Button
	deleteButton.classList.add('delete') //Added Class
	deleteButton.innerHTML = `<i class="fas fa-trash"></i>` //Seted Icon
	toDoDiv.appendChild(deleteButton) //Put it inside Parent Div

	//Append The Div inside the Ul
	todoList.appendChild(toDoDiv)
}

//Function for delete n Check
function deleteCheck(e) {
	const element = e.target

	//Delete Todo
	if (element.classList[0] === 'delete') {
		element.parentElement.classList.add('fall')
		setTimeout(() => {
			element.parentElement.remove()
		},300)
	}

	//Completed Todo
	if (element.classList[0] === 'complete') {
		element.parentElement.classList.toggle('completed')
	}
}

//Funtion For Filtering Our Todo
function filterTodo(event) {
	const todos = todoList.childNodes;
	todos.forEach(function (todo) {
		switch (event.target.value) {
			case "all":
				todo.style.display = "flex";
			break;
			
			case "completed":
				if (todo.classList.contains("completed")) {
					todo.style.display = "flex";
				}
				else {
					todo.style.display = "none";
				}
			break;
			
			case "uncompleted":
				if (!todo.classList.contains("completed")) {
					todo.style.display = "flex"
				}
				else {
					todo.style.display = "none"
				}
			break;
		}
	})
}