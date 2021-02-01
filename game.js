class Game {
    constructor(){
    }
    getGameState(){
        var gameState_ref = database.ref('gameState')
        gameState_ref.on('value',function(data){
            gameState=data.val()})
    }

    update(state){
        database.ref('/').update({
            gameState : state,
        })
    }
    start(){
        if(gameState === 0){
            player = new Player()
            player.getCount()
            form = new Form()
            form.display()
        }
        car1=createSprite(100,200)
        car1.addImage(car1image)
        car2=createSprite(300,200)
        car2.addImage(car2image)
        cars = [car1,car2]
    }
    play(){
        form.hide()
        Player.getPlayerInfo()
        player.readFinishline()
        if(all_players!== undefined){
            background("#C68767")
            image(trackImage, 0, -displayHeight*4, displayWidth, displayHeight*5)
            var index = 0
            var x = 175
            var y
            for(var plr in all_players){
                index = index+1
                x = x+200
                y = displayHeight-all_players[plr].distance
                cars[index-1].x = x
                cars[index-1].y = y
                if(index===player.index){
                fill ("red")
                circle(x,y,60)
                camera.position.x = displayWidth/2
                camera.position.y = cars[index-1].y
                }
            }
        }

        if (keyDown(UP_ARROW)&&player.index !=null){
            player.distance+=10
            player.update()
        }
        if (player.distance >4220){
            gameState=2
            player.rank+=1
            player.updateFinishline(player.rank)
            textSize(40)
            text('your Rank is '+ player.rank, displayWidth/2, camera.position.y-200)
        }
    drawSprites()
    }
}