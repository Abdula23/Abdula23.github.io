var money = 2000;
var factory = { products: 0, power: 0.5, upgradePrice: 6, multiplier: 1,}
var army = { soliders: 0, price: 20, }
var countries = { 
    russia: {},
    usa: {
        soliders: 27,
    },
    france: {},
    china: {},
}
var gameframe = setInterval(game, 1000)

function game (){
    factory.products += factory.power;
    $('.factory_products').html(factory.products.toFixed(1) + "$")
}

$('.collect_btn').click(function(){
    money += factory.products;
    factory.products = 0;
    $('.money').html(money.toFixed(1) + "$");
})

$('.factory_upgrade_btn').click(function(){
    if(money >= factory.upgradePrice) {
        money -= factory.upgradePrice;
        factory.upgradePrice = 6 * (1.07 ** factory.multiplier);
        factory.multiplier++;
        factory.power = 0.5 * (1.07 ** factory.multiplier);
        $('.factory_upgrade_btn').html("Upgrade " + factory.upgradePrice.toFixed(1) + "$");
        $('.factory_power').html(factory.power.toFixed(2) + " in 1s")
        $('.money').html(money.toFixed(1) + "$");
    } else {
        alert("deneg net u tebya")
    }
})

$('.factory_open_btn').click(function(){
    $('.factory_container').toggle()
    $('.army_container').css("display", "none"); armyDisplay = false;
})
var armyDisplay = false;
$('.army_open_btn').click(function(){
    if(armyDisplay) {
        $('.army_container').css("display", "none"); armyDisplay = false; $('.factory_container').hide() } 
        else { $('.army_container').css("display", "flex"); armyDisplay = true; $('.factory_container').hide() }
})




// army 

$('.army_buy_btn').click(function(){
    if(money >= army.price) {
        money -= army.price;
        army.soliders++;
        $('.money').html(money.toFixed(1) + "$");
        $('.army_counts').html(army.soliders + " soliders")
    }
})
var attack_confirmDisplay = false;
$('.country_attack').click(function(){
    if(attack_confirmDisplay) {
        $('.confirm_attack_container').css("display", "none");
        attack_confirmDisplay = false;
    } else {
        $('.confirm_attack_container').css("display", "flex");
        attack_confirmDisplay = true;
    }
})
$('.confirm_attack_no').click(function(){
    $('.confirm_attack_container').css("display", "none");
    attack_confirmDisplay = false;
})


$('.confirm_attack_yes').click(function(){
    if(army.soliders > 0) {
        countries.usa.soliders -= army.soliders;
        army.soliders = 0;
        $('.country_defense').html("Defense: " + countries.usa.soliders);
        if(countries.usa.soliders < 1) {
            $('#c2').css("background", "#2bd678");
            alert("Congratulations! You succesful attack other country!")
            $('.country_defense').html("");
        }
    } else {
        alert("Not have soliders!")
    }
})



var defenseUsa = setInterval(defensePlus, 20000);

function defensePlus (){
    countries.usa.soliders++;
    $('.country_defense').html("Defense: " + countries.usa.soliders);
}