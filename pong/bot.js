$('.one_player').click(function(){
    playerVsBot = true;
    startDraw()
    $('.select_mode').toggle()
    $('#game').fadeIn()
    $('.press_space').fadeIn()
})

var playerVsBot = false
var botY
function botPlay() {
	if(ball.y > leftPlayer.y + 15 && leftPlayer.y != 288) {
	    leftPlayer.y += 46
	} else if(ball.y < leftPlayer.y + 85 && leftPlayer.y != 12) {
		leftPlayer.y -= 46
	}
}