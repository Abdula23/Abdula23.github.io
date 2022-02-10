const canvas = document.getElementById("game")
const ctx = canvas.getContext("2d")

ctx.fillStyle = "#213233" // закрашивание фона
ctx.fillRect(0, 0, 600, 600)

ctx.fillStyle = "#fff" // спавн головы змеи в начале игры
ctx.fillRect(270, 270, 30, 30)

let snake = { // массив с параметрами земейки
	width: 30,
	orientation: "right",
}

var snakes = [ // сам массив в котором координаты каждой отдельной части змейки
	[270, 270],
]

let score = 1;
let time = 0;

let drawInterval = setInterval(drawSnake, 120) // каждые 120 милисекунд перерисовывается вся игровая область

function drawSnake() { 
	if(snakes[0][0] == apple.x && snakes[0][1] == apple.y) { // проверяет не подобрал ли игрок яблоко
		score++
		apple.x = 999 // сбрасывает координаты яблоки чтобы его не было видно на поле
		apple.y = 999 // сбрасывает координаты яблоки чтобы его не было видно на поле
		snakes.push([snakes[snakes.length - 1][0], snakes[snakes.length - 1][1]]) // добавляет в конец массива объект, т.е. змейка увеличивается на единицу
		if(rarityApple > 820) { // проверка не заспавнилось ли редкое яблоко
			snakes.push([snakes[snakes.length - 1][0], snakes[snakes.length - 1][1]]) // добавляет ещё один объект в массив
			score++
		}
		spawnApple() // сама функция для спавна яблок. располагается в другом файле

		document.getElementById("score").innerHTML = score

	}
	snakeRender() // функция отрисовки змейки и яблока
}

function snakeRender() {

	removeSnake() 
	nextStepSnake() // функция для расчета перемещения змейки


	for(i = 0; snakes.length > i; i++) { // прогоняется по всему массиву snakes и отрисовывает всю змейку
		ctx.fillStyle = "#fff"
		ctx.fillRect(snakes[i][0], snakes[i][1], snake.width, snake.width)
	}

	ctx.fillStyle = "red"
	if(rarityApple > 820) { // отрисовывает яблоко по значениям из spawnApple()
		ctx.fillRect(apple.x - 4, apple.y - 4, apple.width, apple.width)
	} else {
		ctx.fillRect(apple.x + 6, apple.y + 6, apple.width, apple.width)
	}
}

document.addEventListener("keydown", snakeControl) // отслеживает нажатие клавиш
function snakeControl() { // проверяет какая клавиша нажат чтобы указать направление движения змейки
	if(event.code == "ArrowUp" && snake.orientation != "down"){
		snake.orientation = "up"
    } else if(event.code == "ArrowRight" && snake.orientation != "left"){
        snake.orientation = "right"
    } else if(event.code == "ArrowDown" && snake.orientation != "up"){
    	snake.orientation = "down"
    } else if(event.code == "ArrowLeft" && snake.orientation != "right"){
    	snake.orientation = "left"
    }
}

function nextStepSnake() {
	for (i = 0; i < snakes.length; i++) { 
		if(i != 0) {
			snakes[snakes.length - i][0] = snakes[snakes.length - i - 1][0] // берет значение впереди идущей части и присваивает к позади идущей
			snakes[snakes.length - i][1] = snakes[snakes.length - i - 1][1]
		}
	}

	if(snake.orientation == "up") { // в зависимости от направления перемещает змейку
		snakes[0][1] -=30
	} else if(snake.orientation == "right") {
		snakes[0][0] += 30
	} else if(snake.orientation == "down") {
		snakes[0][1] += 30
	} else if(snake.orientation == "left") {
		snakes[0][0] -= 30
	}
	diedSnake()
}

function removeSnake() { // функция закрашивает освободившиеся от змейки поля0
	ctx.fillStyle = "#213233"	 //	тупо закрашивает всё поле  	
	ctx.fillRect(0, 0, 600, 600) // в цвет фона, после этого будет закрашены ячейки змейки
}


function diedSnake() {
	for(i = 0; i < snakes.length; i++) {
		if(i != 0 && snakes[0][0] == snakes[i][0] && snakes[0][1] == snakes[i][1]) {
			alert("you died")
			clearInterval(drawInterval)
		}
	}
	if(snakes[0][0] == 600 || snakes[0][0] == -30) {
		clearInterval(drawInterval)
		alert("You died")
	}
	if(snakes[0][1] == 600 || snakes[0][1] == -30) {
		clearInterval(drawInterval)
		alert("You died")
	}
}




