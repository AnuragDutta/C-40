class Player{
    constructor(){
        this.index = null 
        this.distance = 0
        this.name = null
        this.rank = null
    }
    getCount(){
        var playerCountref = database.ref('playerCount').on("value",function(data){playerCount = data.val()})

    }

    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }

    update(){
        var playerIndex = 'players/player'+ this.index
        database.ref(playerIndex).set({
            name : this.name, distance :this.distance
        })
    }
    static getPlayerInfo(){
        database.ref('players').on('value',function(data){all_players = data.val()})
    }
    readFinishline(){
        database.ref('finishLine').on('value', (data)=>{this.rank = data.val()})
    }  

    updateFinishline(rank){
        database.ref('/').update(
            {finishLine:rank}
        )
    }
}