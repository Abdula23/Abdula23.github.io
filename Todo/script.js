todos = []
if(localStorage.getItem("todos") != null) { todos = JSON.parse(localStorage.getItem("todos")) }

todosHTML = document.querySelector(".todos")
todosDoneContainerHTML = document.querySelector(".doneTodos")

function addTodo (text) {
	const todoEl = {
		id: Math.random(),
		text,
		done: false,
	}
	todos.push(todoEl)
	render()
}
$('#addInput').keyup((e) => {
	if(e.keyCode == 13) {
		if($("#addInput").val() == "" || $("#addInput").val() == " ") {
			return;
		}
		addTodo($("#addInput").val())
		$("#addInput").val("")
	}
})

function doneTodo (id) {
	todos.forEach(todoEl => {
		if(id == todoEl.id) {
			if(todoEl.done){
				todoEl.done = false;
			} else {
				todoEl.done = true;
			}
		}
	})
	render()
}

function render () {
	
	let todoHTML = ``;
	let todoDoneHTML = ``;
	let doneElemsForAnim;
	todos.forEach(todoEl => {
		if(!todoEl.done) {
			todoHTML += 
			`<div class="${ifDoneGreen(todoEl.done)} kkku" data-id="${todoEl.id}">` +
			`<button id="doneBtn" data-id="${todoEl.id}"><img src="img/done.png" class="${ifDoneGreen(todoEl.done)}"  data-id="${todoEl.id}"></button>` +
			`
			<span>${ todoEl.text }</span>
			</div>
			`
			
			if(todoEl.done) {
				
			}
		} else {
			todoDoneHTML +=
			`<div class="${ifDoneGreen(todoEl.done)} kkku" data-id="${todoEl.id}">` +
			`<button id="doneBtn" data-id="${todoEl.id}"><img src="img/done.png" class="${ifDoneGreen(todoEl.done)}"  data-id="${todoEl.id}"></button>` +
			`
			${ todoEl.text }
			</div>
			`
			// doneElemsForAnim = todoEl.id;
			// console.log(doneElemsForAnim)
		}
	})

	todosHTML.innerHTML = todoHTML
	todosDoneContainerHTML.innerHTML = todoDoneHTML
	
	localStorage.setItem("todos", JSON.stringify(todos))
}

function ifDoneGreen (e) {
	if(e) {
		return "done";
	} else {
		return "notDone";
	}

}

function clickDoneBtn (e) {
	if(e.target.id == "doneBtn" || e.target.className == "done" || e.target.className == "notDone" && e.target.className != "kkku") {
		doneTodo(e.target.dataset.id)
	} else {
		return;
	}

}


// add todo bttn click event
$(".todos").click( (e) => { clickDoneBtn(e) })
$(".doneTodosContainer").click( (e) => { clickDoneBtn(e) })

$(".doneTodoTop button").click(() => {
	$(".doneTodos").toggle()
	$(".doneTodoTop button img").toggleClass("doneTodoBtnActive")
})


$('.add-todo button').click(() => {
	if($("#addInput").val() == "" || $("#addInput").val() == " ") {
		return;
	}
	addTodo($("#addInput").val())
	$("#addInput").val("")
})

$('.openMenuBtn').click(() => {
	$('.openMenuBtn').toggleClass("menuActive")
	$('.menu').toggleClass("menuActive")
})
$('.deleteDoneTodos').click(() => {
	todos.forEach(todoEl => {
		if(todoEl.done == true) {
			delete todos[todos.indexOf(todoEl)]
			todos = todos.filter(element => element != null)
		}
	})
	render()
})
$('.doneAllTodos').click(() => {
	todos.forEach(todoEl => {
		if(todoEl.done == false) {
			todoEl.done = true;
		}
	})
	render()
})
$('.cancelDoneTodos').click(() => {
	todos.forEach(todoEl => {
		if(todoEl.done == true) {
			todoEl.done = false;
		}
	})
	render()
})

render()