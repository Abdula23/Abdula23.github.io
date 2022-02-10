var money = 100;
var apple = 0;
var pear = 0;

$('.money').html(money +"$")


$('.tabBuy').click(function(){
	$('.tabSell').removeClass("tabOpen")
	$('.tabSell').addClass("tabClosed")
	$('.tabBuy').removeClass("tabClosed")
	$('.tabBuy').addClass("tabOpen")
})

$('.tabSell').click(function(){
	$('.tabBuy').removeClass("tabOpen")
	$('.tabBuy').addClass("tabClosed")
	$('.tabSell').removeClass("tabClosed")
	$('.tabSell').addClass("tabOpen")
})



function buy (count, kk) {
	if(kk <= money) {
		money -= +kk

		if(count == item_count1) {
			apple += +count.value
			$('#itemsApple').html("Яблоки: " + apple + "шт")
			$('.firstBuyBttn').css({'border': 'none', 'border-top': '3px #ff6969 solid', 'border-left': '3px #ff6969 solid', 'border-right': '3px #ff6969 solid', 'background-color': '#f57373'})
			setTimeout(function (){ $('.firstBuyBttn').css({'border': 'none', 'border-bottom': '3px #ff6969 solid', 'background-color': '#F77B7B'})}, 200) 
		} else {
			pear += +count.value
			$('#itemsPear').html("Груша: " + pear + "шт")
			$('.secondBuyBttn').css({'border': 'none', 'border-top': '3px #ff6969 solid', 'border-left': '3px #ff6969 solid', 'border-right': '3px #ff6969 solid', 'background-color': '#f57373'}) 
			setTimeout(function (){ $('.secondBuyBttn').css({'border': 'none', 'border-bottom': '3px #ff6969 solid', 'background-color': '#F77B7B'})}, 200) 
		}
		$('.money').html(money +"$")
		console.log(price.value)
	}
}

var price = +item_count1.value * 10
item_count1.oninput = function lp(){
	price = +item_count1.value * 10
	$('#price').html(+price + "$")
}
var price2 = +item_count2.value * 10
item_count2.oninput = function lp(){
	price2 = +item_count2.value * 10
	$('#price2').html(+price2 + "$")
}



$('.openMyItems').click(function(){
	$('.myItems').fadeOut(300)
	$('.itemsIconDown').css('transform', 'rotate(180deg)')
		if($('.myItems').css("display") == "none") { $('.myItems').fadeIn(300); 
		$('.itemsIconDown').css('transform', 'rotate(360deg)')
	}
})

