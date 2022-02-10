
$('.select_vs_friend').click(function(){
    $('.container').css('display', 'flex')
    $('.whoplayer').css('display', 'block')
})



















var grid = [, , ,
            , , ,
            , , ,]


var player = "x";
var steps = 0
var vsPc = true


$('.cell').click(function(){
    if($(this).find('img').attr("src") == "images/0.png" || $(this).find('img').attr("src") == "images/x.png") {} else {
        steps++
        if(vsPc == true) {
            $(this).find('img').attr("src", "images/x.png")
                grid[this.id - 1] = player
                check()
                player = "0"

                bot()
        } else {
            if(player == "x") {
                $(this).find('img').attr("src", "images/x.png")
                grid[this.id - 1] = player
                check()
                player = "0"
            } else {
                $(this).find('img').attr("src", "images/0.png")
                grid[this.id - 1] = player
                check()
                player = "x"
            }
        }
        
        $('.whoplayer img').attr("src", "images/" + player + ".png")
        
        console.log(grid)

    }

    if(steps == 9) {
        $('.game_end').css('display', 'flex')
    }
})


function check() {
    if(grid[0] == player && grid[1] == player && grid[2] == player) {
        $('#1, #2, #3').css('background-color', '#8bff59')
        setTimeout(function(){ alert("You win!"); location.reload()}, 300)
    } else if(grid[3] == player && grid[4] == player && grid[5] == player) {
        $('#4, #5, #6').css('background-color', '#8bff59')
        setTimeout(function(){ alert("You win!"); location.reload()}, 300)
    } else if(grid[6] == player && grid[7] == player && grid[8] == player) {
        $('#7, #8, #9').css('background-color', '#8bff59')
        setTimeout(function(){ alert("You win!"); location.reload()}, 300)
    } else if(grid[0] == player && grid[3] == player && grid[6] == player) {
        $('#1, #4, #7').css('background-color', '#8bff59')
        setTimeout(function(){ alert("You win!"); location.reload()}, 300)
    } else if(grid[1] == player && grid[4] == player && grid[7] == player) {
        $('#2, #5, #8').css('background-color', '#8bff59')
        setTimeout(function(){ alert("You win!"); location.reload()}, 300)
    } else if(grid[2] == player && grid[5] == player && grid[8] == player) {
        $('#3, #6, #9').css('background-color', '#8bff59')
        setTimeout(function(){ alert("You win!"); location.reload()}, 300)
    } else if(grid[0] == player && grid[4] == player && grid[8] == player) {
        $('#1, #5, #9').css('background-color', '#8bff59')
        setTimeout(function(){ alert("You win!"); location.reload()}, 300)
    } else if(grid[2] == player && grid[4] == player && grid[6] == player) {
        $('#3, #5, #7').css('background-color', '#8bff59')
        setTimeout(function(){ alert("You win!"); location.reload()}, 300)
    }
}


function bot() {
    var randomPos = Math.floor(Math.random() * 8) + 1
    if(grid[randomPos - 1] === undefined) {
        $('#' + randomPos).find('img').attr('src', 'images/0.png')
        randomPos--
        grid[randomPos] = "0"
        check()
        player = "x"
        console.log(randomPos)
    } else if(steps != 9){
        bot()
    }
}


$('.game_end button').click(function(){location.reload()})