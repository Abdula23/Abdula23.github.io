$('.right_panel').toggle()

let openedDiscipline = ""


$('.lesson_name').click(function (e) {
	$('.right_panel').hide()

	e = $(e.target).html()
	if(openedDiscipline == e) {
		$('.right_panel').hide()
		openedDiscipline = ""
	} else { openedDiscipline = e 
		setTimeout(() => {$('.right_panel').show()}, 100)
	}

	$('.lesson_name_more').html(discArr[selectDisc(e)].name)
	$('.icon_discipline').attr('src', discArr[selectDisc(e)].img)
	$('.aud').html("Аудитория " + discArr[selectDisc(e)].aud)
	$('.teacher_name').html("Преподаватаель " + discArr[selectDisc(e)].teacherName)
	$('.docs_discipline a').html(" " + discArr[selectDisc(e)].docs)

})


$('.close_right').click(() => {
	$('.right_panel').toggle()
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
		name: "Биоорганическая химия",
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
