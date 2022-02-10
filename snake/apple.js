let apple = { // массив с параметрами и координатами яблока
	x: Math.round(Math.random() * 20) * 30,
	y: Math.round(Math.random() * 20) * 30,
	width: 18,
}

let rarityApple = 0;  // значение редкости яблока

function spawnApple() {
	let spawnAppleInterval = setTimeout(() => { // метод запускает функицию с задержкой времени в рандом 0-3 секунды
		apple.x = Math.round(Math.random() * 19) * 30 // рандомно располагает яблоко на поле
		apple.y = Math.round(Math.random() * 19) * 30 // рандомно располагает яблоко на поле
	}, Math.random() * 3000)
	rarityApple = Math.round(Math.random() * 1000) // редкость яблока на рандом
	if(rarityApple > 820) {
		apple.width = 38
	} else {
		apple.width = 18
	}
}


