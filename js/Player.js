// class joueurs

class Player {
    constructor(name,mapSize=8, style, health = 100, attackPower = 10) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.mapSize = mapSize;
        this.style = style;
        this.creatPlayer(name);
    }

    creatPlayer () {
        let playerOk = false;

        while (!playerOk) {
            let random = Utils.randomSquare(this.mapSize);

            if (!random.hasClass("weapon") && !random.hasClass("wall") && !random.hasClass("wallplayer")) {
                random.addClass("player");
                random.addClass(this.style);
                playerOk = true;
            }
        }
    }


    playerPositionX() {
        return $("." + this.style).attr("x");        
    }

    playerPositionY() {
        return $("." + this.style).attr("y");        
    }

    showMove() {
        
        return $("." + this.style).attr("x");
         
     }
 
    
}