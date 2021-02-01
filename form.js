class Form {
    constructor(){
        this.input = createInput("name")
        this.button = createButton("Log In")
        this.greeting = createElement("h3")
        this.reset = createButton("Reset")
    }
    hide(){
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
    display(){
        var title = createElement('h2')
        title.html("Car Racing")
        title.position(displayWidth/2-50,0)
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        this.button.position(displayWidth/2+30,displayHeight/2)
        this.reset.position(displayWidth/2, 100)
        this.button.mousePressed(()=>{this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        playerCount += 1
        player.index = playerCount
        player.update()
        player.updateCount(playerCount)
        this.greeting.html("welcome "+player.name)
        this.greeting.position(displayWidth/2-40,displayHeight/2-80)
    })
    this.reset.mousePressed(()=>{game.update(0)
    player.updateCount(0)
    database.ref('players').remove()
    player.updateFinishline(0)
    })
    }
}