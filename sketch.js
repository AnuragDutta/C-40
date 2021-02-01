var gameState = 0;
var form,game,player
var database, playerCount
var all_players
var cars, car1, car2

function preload(){
    car1image = loadImage("images/car1.png")
    car2image = loadImage("images/car2.png")
    trackImage = loadImage("images/track.jpg")
}
function setup(){
    createCanvas(displayWidth,displayHeight);
    database = firebase.database()
    game = new Game()
    game.getGameState()
    game.start()
}

function draw(){
    if(playerCount===2){
        game.update(1)
    }
    if(gameState === 1){
        clear()
        game.play()
    }
}