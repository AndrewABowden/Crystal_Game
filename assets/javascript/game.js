// Global variables 
var random_result;
var lost = 0;
var win= 0;
var previous = 0;


//Getters -- gets our class value,
//$(".crystal").attr('class');

//Function for starting game on wins/loses
var resetGame = function () {
    
    $(".crystals").empty(); 
   
   var images = [
    'https://www.happyglastonbury.co.uk/wp-content/uploads/2016/08/amethyst.jpg',
    'http://www.crystalage.com/img/controlVariables/Crocoite%20420.jpg',
    'https://static1.squarespace.com/static/56ebe8b4ab48de1f8fdb5c42/t/5872a9d23a0411b6dbd0bc37/1483909596492/?format=300w',
    'https://shulme801.github.io/crystal-collector-game/assets/images/crystal_logo.png'];


    random_result = Math.floor(Math.random() * 69 ) + 30 //hoisting keeps our results under 100
code
    //Visibility of Random Result: 
    $("#result").html('Random Result: ' + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1; //Gens number between 1-12 for each crystal

        //Assigns values to each crystal
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal', //setting a value for class crystal, that is data-random
            "data-random": random//this is how you set the attribute
            //animate up and fade out. then remove element. change value
        });
        crystal.css({
            "background-image":"url('"+ (images[i]) + "')",
            "background-size":"cover"
        });
 // crystal.html(random); //shows crystal number in element
    
            


        $(".crystals").append(crystal);

    }
$("#previous").html("Total Score: " + previous);   
}

resetGame(); //Function that Begins game on lose/win 
var reset = function () {

}


//When we click crystal it should be equal to this -- on click function, this refers to any "crystals clicked" selects the div.
//Event delegation
$(document).on('click', ".crystal", function () {
    

    var num = parseInt($(this).attr('data-random')); //data random adds two numbers
    previous += num;

    $("#previous").html("Total Score: " + previous);
    console.log(previous);


    if(previous > random_result) { 
        lost++;//If crystals selected greater than starting number, you lose
        $("#lost").html("You Lost: " + lost); //logs loses
        console.log("you lost!!");
        previous = 0;
        resetGame();
    }
    else if(previous === random_result) { //if guesses = random num gen you win
        win++;
        console.log("you Win!")
        $("#win").html("You Won: " + win); 
        previous = 0;
        resetGame();//logs wins
    }

});


// psuedocode 
//creating a game create 4 crystals that each have a random value
//Random result math gen number under 100, if greater than random result we decrement a lost counter
//each crystal needs a random number between 1-12, done through math.random *12
//each number for the crystal should be generated every single time we win or lose
 //when clicking any crystal it should add with previous result
//until it equals total score
// if its not equal, we start over
//if it is equal, we increment a win counter -->
//need to have win/loss recording
