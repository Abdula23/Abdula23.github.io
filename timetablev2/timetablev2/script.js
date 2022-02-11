$('.right_panel').toggle()
$('.mobile_more_info').toggle()

let openedDiscipline = ""


$('.lesson_name').click(function (e) {
	e = $(e.target).html()
	if(openedDiscipline == e) {
		openedDiscipline = ""
		if($('html').width() < 600) {
			$('.mobile_more_info').hide()
		} else {
			$('.right_panel').toggle()
		}
		removeSmallClass()
	} else {
		if($('html').width() < 600) {
			$('.mobile_more_info').show()
		}  else {
			$('.right_panel').show()
		}
		openedDiscipline = e
		if($('html').width() > 1000) { addSmallClass() }
	}

	$('.lesson_name_more').html(discArr[selectDisc(e)].name)
	$('.icon_discipline').attr('src', discArr[selectDisc(e)].img)
	$('.aud').html("Аудитория " + discArr[selectDisc(e)].aud)
	$('.teacher_name').html("Преподаватаель " + discArr[selectDisc(e)].teacherName)
	$('.docs_discipline a').html(" " + discArr[selectDisc(e)].docs)
})


$('.docs_discipline').click(() => {
	$('.docs_view').show()
	if($('html').width() > 600) {
		$('.docs_view').css('left', '72vw')
	} else {
		$('.docs_view').toggle()
	}
})
$('.back').click(() => {
	$('.docs_view').css('left', '100vw')
})



$('.close_right').click(() => {
	$('.right_panel').hide()
	removeSmallClass()
	openedDiscipline = ""
})
$('.close_mobile_info').click(() => {
	$('.mobile_more_info').hide()
	openedDiscipline = ""
})



let discArr = {
	biology: {
		img: "img/biology.png",
		name: "Биология",
		aud: "Б2-06",
		teacherName: "Исмаилов А.А.",
		docs: "открыть",
	},
	phystrain: {
		img: "img/phys.png",
		name: "Физкультура",
		aud: "Олимпийский/Центр",
		teacherName: "?",
		docs: "открыть",
	},
	anatomy: {
		img: "img/heart.png",
		name: "Анатомия",
		aud: "А0-07",
		teacherName: "Лорсанова И.С.",
		docs: "открыть",
	},
	economy: {
		img: "img/analytics.png",
		name: "Экономика",
		aud: "Б3-07",
		teacherName: "Гехаева П.Т.",
		docs: "открыть",
	},
	latin: {
		img: "img/die.png",
		name: "Латинский язык",
		aud: "Б3-06",
		teacherName: "Эдельбиева М.Л.",
		docs: "открыть",
	},
	bioorgany: {
		img: "img/chemistry.png",
		name: "Биоорганика",
		aud: "Г3-09",
		teacherName: "Яхаджиева С.С.",
		docs: "открыть",
	},
	bioetika: {
		img: "img/soon.png",
		name: "Биоэтика",
		aud: "Г4-05",
		teacherName: "Дудуев У.С.",
		docs: "открыть",
	},
	gistology: {
		img: "img/soon.png",
		name: "Гистология",
		aud: "В2-09",
		teacherName: "Тутаева Л.М.",
		docs: "открыть",
	},
	kurator: {
		img: "img/soon.png",
		name: "Кураторский час",
		aud: "Б2-01",
		teacherName: "Исмаилов А.А.",
		docs: "открыть",
	},
	informatica: {
		img: "img/computer.png",
		name: "Медицинская информатика",
		aud: "Б2-04",
		teacherName: "Дадаева А.",
		docs: "открыть",
	}, 
	english: {
		img: "img/english.png",
		name: "Английский язык",
		aud: "А3-06",
		teacherName: "Джукаева М.",
		docs: "открыть",
	}
}

function selectDisc (e) {
	if(e == "Биология") {
		return "biology";
	} else if (e == "Физкультура") {
		return "phystrain"
	} else if (e == "Анатомия") {
		return "anatomy"
	} else if (e == "Экономика") {
		return "economy"
	} else if (e == "Латинский") {
		return "latin"
	} else if (e == "Биоорганика") {
		return "bioorgany"
	} else if (e == "Биоэтика") {
		return "bioetika"
	} else if (e == "Гистология") {
		return "gistology"
	} else if (e == "Кураторский") {
		return "kurator"
	} else if (e == "Информатика") {
		return "informatica"
	} else if (e == "Английский") {
		return "english"
	}
}


function addSmallClass () {
	$('.day_name').addClass('day_nameS')
	$('.day_block').addClass('day_blockS')
	$('.lesson_block').addClass('lesson_blockS')
	$('.lesson_block_double').addClass('lesson_block_doubleS')
	$('.lesson_back').addClass('lesson_backS')
	$('.lesson_name').addClass('lesson_nameS')
	$('.empty_lesson').addClass('empty_lessonS')
	$('.empty_lesson1').addClass('empty_lesson1S')
	$('.empty_lesson2').addClass('empty_lesson2S')
}
function removeSmallClass () {
	$('.day_name').removeClass('day_nameS')
	$('.day_block').removeClass('day_blockS')
	$('.lesson_block').removeClass('lesson_blockS')
	$('.lesson_block_double').removeClass('lesson_block_doubleS')
	$('.lesson_back').removeClass('lesson_backS')
	$('.lesson_name').removeClass('lesson_nameS')
	$('.empty_lesson').removeClass('empty_lessonS')
	$('.empty_lesson1').removeClass('empty_lesson1S')
	$('.empty_lesson2').removeClass('empty_lesson2S')
}