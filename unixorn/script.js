$('.close_notice').click(function(){ $('.notice').css('display', 'none')})



$('.slide_select1').click(function() {
    $('.slide_select1').css('background-color', '#8899F1')
    console.log("d")
})


$('.slide_select1').css('background-color', '#8899F1') // установка цвета для первого селектора
$('.slider').width($('.slider').children().length * 592)

sliderTimer = setInterval(nextSlide, 5000);
    
/*функция, сменяющая слайды каждую секунду*/
function nextSlide(){
    var currentSlide = parseInt($('.slider').data('current'));  //определяем текущий слайд
    currentSlide++;  //увеличиваем его значение
    if(currentSlide>=$('.slider').children().length) //перематываем к началу, если слайд последний
    {
        currentSlide=0;   
    }
    /*передвигаем список и сохраняем значение текущего слайда*/
    $('.slider').animate({left: -currentSlide * 592}, 800).data('current',currentSlide);
    $('.slide_select').children().css('background-color', '#EEEEEE')
    $('.slide_select').children(".slide_select" + ++currentSlide).css('background-color', '#8899F1')
    console.log("slide_select" + currentSlide)
}