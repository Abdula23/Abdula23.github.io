
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

let lessons = [
	[
		[
			"Физическа Культура",
			"Химия",
			"Кураторский час",
			"ОКНО",
			"ОКНО",
		],
		[
			"История",
			"Лекарственные растения. ЛЕКЦИЯ",
			"Анатомия человека",
			"Анатомия человека",
			"ОКНО",
		],
		[
			"Перевод проф лит-ры.",
			"Физика. ЛЕКЦИЯ",
			"Правоведение",
			"ОКНО",
			"ОКНО",
		]
	],

	//second week
	[
		[
			"Физическа Культура",
			"Химия",
			"Биология. ЛЕКЦИЯ",
			"ОКНО",
			"ОКНО",
		],
		[
			"ОКНО",
			"Латинсикй язык",
			"Правоведение. ЛЕКЦИЯ",
			"Анатомия человека",
			"ОКНО",
		],
		[
			"Физика",
			"Лекарственные растения",
			"ОКНО",
			"ОКНО",
			"ОКНО",
		],
	],
	[
		"",
	]
]



let myLesson = null;
let myWeek = 2;
let day = new Date();
// day.setHours(10)
// day.setMinutes(23)
console.log(day.getHours(), day.getMinutes())

let nowLessonTime = null
function nowLessonTimeFunc () {

// первая пара
if(day.getHours() >= times.first.hour && day.getHours() <= times.second.hour) { 
	if(day.getHours() == times.second.hour) {
		if(day.getMinutes() <= times.second.minute - 10) { nowLessonTime = "Идет первая пара! (1-2)"; myLesson = 0 }
	} else { nowLessonTime = "Идет первая пара! (1-2)"; myLesson = 0 }
}
// вторая пара
if(day.getHours() >= times.second.hour && day.getHours() <= times.third.hour) { 
	if(day.getHours() == times.third.hour) {
		if(day.getMinutes() <= times.third.minute - 35) { nowLessonTime = "Идет вторая пара! (3-4)"; myLesson = 1 }
	} else if(day.getHours >= times.second.hour){ nowLessonTime = "Идет вторая пара!"; myLesson = 1 }
}
// третья пара
if(day.getHours() >= times.third.hour && day.getHours() <= times.fourth.hour) { 
	if(day.getHours() == times.fourth.hour || day.getHours() == 13) {
		if(day.getMinutes() <= times.fourth.minute - 10 || day.getHours() == 13) { nowLessonTime = "Идет третья пара! (5-6)";  myLesson = 2 }
	} else if(day.getHours() >= times.third.hour && day.getMinutes() >= times.third.minute) { nowLessonTime = "Идет третья пара! (5-6)"; myLesson = 2 }
}
// четвертая пара
if(day.getHours() >= times.fourth.hour && day.getHours() <= times.fifth.hour) { 
	if(day.getHours() == times.fifth.hour || day.getHours() == 15) {
		if(day.getMinutes() <= times.fifth.minute - 10 || day.getHours() == 15 && day.getMinutes() <= 55) { nowLessonTime = "Идет четвертая пара! (7-8)"; myLesson = 3 }
	} else if(day.getHours() >= times.third.hour && day.getMinutes() >= times.fourth.minute) { nowLessonTime = "Время четвертая пары! (7-8)"; myLesson = 3 }
}
// пятая пара
if(day.getHours() >= times.fifth.hour && day.getHours() <= 17) { 
	if(day.getHours() == 16 || day.getHours() == 17) {
		if(day.getMinutes() <= 35 || day.getHours() == 17 && day.getMinutes() <= 35) { nowLessonTime = "Идет пятая пара! (9-10)"; myLesson = 4 }
	} else if(day.getHours() >= times.fourth.hour && day.getMinutes() >= times.fifth.minute) { nowLessonTime = "Идет пятая пара! (9-10)"; myLesson = 4 }
}
if(myLesson == null) {
	$('.innerToday').html('Сейчас перерыв.');
} 
nowLesson()
}

let setNowLessonTime = setInterval(() => {
	nowLessonTimeFunc()
	$('.innerToday').html(nowLessonTime);
	zx()
	console.log("reset minute data")
}, 60000)

function zx() {
if($('.innerToday').html() == "") {
	if(day.getHours() < 9 || day.getHours() >= 17) {
		if(day.getHours() < 9) { $('.innerToday').html('Занятия ещё не начались.') } else if(day.getHours() >= 17) { $('.innerToday').html('Занятия окончены. Можно спать...') }
	} else if(day.getHours() >= 9 && day.getHours() <= 17) {
		if(day.getHours() == 17 && day.getMinutes() <= 35) {
			$('.innerToday').html('Сейчас перерыв.');
		} else {
		}
	}
}
}

let timesFix = [
	[
		9,
		0,
	],
	[
		10,
		40,
	],
	[
		12,
		45,
	],
	[
		14,
		25,
	],
	[
		16,
		5,
	]
]

let p = 0
function nowLesson () {
	console.log(myLesson)
	p = lessons[myWeek - 1][day.getDay() - 1][myLesson]
	$('.now').html(p)

	if(myLesson != null) {
	let leftTimeH = timesFix[myLesson + 1][0] - day.getHours()
	let leftTimeM = timesFix[myLesson + 1][1] - 10 - day.getMinutes()
	$('.leftTime').html(" " + leftTimeH + "ч " + leftTimeM + "м")
	}

	myLesson = null
}
nowLesson()




$('.main, .closePopup').click(()=>{
	$('.popupToday').addClass('top')
	setTimeout(()=> {$('.popupToday').addClass('down')}, 200)
	$('.blackOpac').hide(300)
	setTimeout(()=> {$('.popupOpenBtn').removeClass('popupOpenBtnNone')}, 400)
})
$('.popupOpenBtn img').click(()=>{
	$('.popupToday').removeClass('down')
	setTimeout(()=> {$('.popupToday').removeClass('top')}, 250)
	$('.blackOpac').show(300)
	$('.popupOpenBtn').toggleClass('popupOpenBtnNone')
})
nowLessonTimeFunc()
$('.innerToday').html(nowLessonTime)
zx()










