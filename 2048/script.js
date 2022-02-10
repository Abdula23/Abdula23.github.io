// var margin = $('.cell10').css('margin');

// $('.cell16').click(a)

// function a () {
//     $('.tt').css('margin', margin)
//     margin = $('.cell12').css('margin')
// }



var countArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
var grid = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
var blocks = []

var t = countArray[Math.floor(Math.random() * 16)]
var margin = $('.cell' + t).css('margin')
$('.tt1').css('margin', margin)
blocks.push(t)

var t = countArray[Math.floor(Math.random() * 16)]
var margin =  $('.cell' + t).css('margin')
$('.tt2').css('margin', margin)
blocks.push(t)

console.log(blocks)




$(document).keyup(function(e){

if(e.key == "ArrowDown") {
    for(i = 0; i < blocks.length; i++) {
        if(grid[blocks[i] + 4] == false) {
            z = blocks[i] + 4
                if(grid[blocks[i] + 8] == false) {
                    z = blocks[i] + 8
                    console.log("+8")
                }
                if(grid[blocks[i] + 12] == false) { 
                    z = blocks[i] + 12
                    console.log("+12")
                }
            console.log(z)                                
            var margin = $('.cell' + z).css('margin')
            $('.tt' + ++i).css('margin', margin)
            i--

            blocks[i] = z

            console.log(blocks)

        }
    }
} else if(e.key == "ArrowUp") {
    for(i = 0; i < blocks.length; i++) {
        if(grid[blocks[i] - 4] == false) {
            z = blocks[i] - 4
                if(blocks[i] == 12 && grid[blocks[i] - 8] == false) {
                    z = blocks[i] - 8
                    console.log("-8")
                }
                if(grid[blocks[i] - 12] == false) { 
                    z = blocks[i] - 12
                    console.log("-12")
                }
            console.log(z)                                
            var margin = $('.cell' + z).css('margin')
            $('.tt' + ++i).css('margin', margin)
            i--
            
            blocks[i] = z

        console.log(blocks)

        }
    }
}


})
