
let times = {
	first: {
		hour: 9,
		minute: 0,
	},
	second: {
		hour: 10,
		minute: 40,
	},
	third: {
		hour: 12,
		minute: 45,
	},
	fourth: {
		hour: 14,
		minute: 25,
	},
	fifth: {
		hour: 16,
		minute: 5,
	}
}

let lessons = {
	monday: {
		first: "Физическа Культура",
		second: "Химия",
		third: "Кураторский час",
		fourth: "",
		fifth: "",
	}
}




var day = new Date();
// day.setHours(13)
// day.setMinutes(23)
console.log(day.getHours(), day.getMinutes())


let nowLesson = () => {

// первая пара
if(day.getHours() >= times.first.hour && day.getHours() <= times.second.hour) { 
	if(day.getHours() == times.second.hour) {
		if(day.getMinutes() <= times.second.minute - 10) { return "Идет первая пара! (1-2)" }
	} else { return "Идет первая пара! (1-2)" }
}
// вторая пара
if(day.getHours() >= times.second.hour && day.getHours() <= times.third.hour) { 
	if(day.getHours() == times.third.hour) {
		if(day.getMinutes() <= times.third.minute - 35) { return "Идет вторая пара! (3-4)" }
	} else if(day.getHours >= times.second.hour){ return "Идет вторая пара!" }
}
// третья пара
if(day.getHours() >= times.third.hour && day.getHours() <= times.fourth.hour) { 
	if(day.getHours() == times.fourth.hour || day.getHours() == 13) {
		if(day.getMinutes() <= times.fourth.minute - 10 || day.getHours() == 13) { return "Идет третья пара! (5-6)" }
	} else if(day.getHours() >= times.third.hour && day.getMinutes() >= times.third.minute) { return "Идет третья пара! (5-6)" }
}
// четвертая пара
if(day.getHours() >= times.fourth.hour && day.getHours() <= times.fifth.hour) { 
	if(day.getHours() == times.fifth.hour || day.getHours() == 15) {
		if(day.getMinutes() <= times.fifth.minute - 10 || day.getHours() == 15 && day.getMinutes() <= 55) { return "Идет четвертая пара! (7-8)" }
	} else if(day.getHours() >= times.third.hour && day.getMinutes() >= times.fourth.minute) { return "Время четвертая пары! (7-8)" }
}
// пятая пара
if(day.getHours() >= times.fifth.hour && day.getHours() <= 17) { 
	if(day.getHours() == 16 || day.getHours() == 17) {
		if(day.getMinutes() <= 35 || day.getHours() == 17 && day.getMinutes() <= 35) { return "Идет пятая пара! (9-10)" }
	} else if(day.getHours() >= times.fourth.hour && day.getMinutes() >= times.fifth.minute) { return "Идет пятая пара! (9-10)" }
}

}

$('.innerToday').html(nowLesson)
let setNowLesson = setInterval(() => {
	nowLesson();
	$('.innerToday').html(nowLesson);
}, 60000)


if($('.innerToday').html() == "") {
	if(day.getHours() < 9 || day.getHours() >= 17) {
		if(day.getHours() < 9) { $('.innerToday').html('Занятия ещё не начались.') } else if(day.getHours() >= 17) { $('.innerToday').html('Занятия окончены. Можно спать...') }
	} else if(day.getHours() >= 9 && day.getHours() <= 17) {
		if(day.getHours() == 17 && day.getMinutes() <= 35) {
			$('.innerToday').html('Сейчас перерыв.');
		} else {
			$('.innerToday').html('Сейчас перерыв.');
		}
	}
}


$('.main, .closePopupLine').click(()=>{
	$('.popupToday').addClass('top')
	setTimeout(()=> {$('.popupToday').addClass('down')}, 200)
	$('.blackOpac').css('opacity', '0')
})

//as