$('.arrow_left').click(function(){
	$('.img1').css('margin-left', '10px')
})
$('.arrow_right').click(function(){
	$('.img1').css('margin-left', '-377px')
})

$('.select_size').change(function(e){
		changePrice()
})

$('.select_stand').change(function(e){
	console.log($('.select_stand option:selected').text())
	changePrice()
})

function changePrice() {
	if($('.select_size option:selected').html() == "80*72" && $('.select_stand option:selected').html() === 'Да') {$('.price').html("3890 р.")
	} else if($('.select_size option:selected').html() == "170*70" && $('.select_stand option:selected').html() === 'Да') {$('.price').html("4390 р.")
	} else if($('.select_size option:selected').html() == "170*70" && $('.select_stand option:selected').html() == "Нет") {$('.price').html("5900 р.")
	} else if($('.select_size option:selected').html() == "80*72" && $('.select_stand option:selected').html() == "Нет") {$('.price').html("3690 р.")
	} else if($('.select_size option:selected').html() == "180*80" && $('.select_stand option:selected').html() == "Да") {$('.price').html("7100 р.")
	} else if($('.select_size option:selected').html() == "180*80" && $('.select_stand option:selected').html() == "Нет") {$('.price').html("6400 р.")}
}
