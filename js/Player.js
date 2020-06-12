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
            
            if (this.style == "player1") {

                let random = Utils.randomSquare(Math.floor(this.mapSize/3));

                if (!random.hasClass("weapon") && !random.hasClass("wall") && !random.hasClass("player")) {
                    random.addClass("player");
                    random.addClass(this.style);
                    playerOk = true;
                }

            } else {

                let random = Utils.randomSquare(Math.floor(this.mapSize), Math.floor(this.mapSize*2/3));

                if (!random.hasClass("weapon") && !random.hasClass("wall") && !random.hasClass("player")) {
                    random.addClass("player");
                    random.addClass(this.style);
                    playerOk = true;
                }
            }

        }
    }


    playerPositionX() {
        return $("." + this.style).attr("x");        
    }

    playerPositionY() {
        return $("." + this.style).attr("y");        
    }

    showDirection(start, end,increment, directionX) {

        const dirX = directionX ? 1 : 0;
        const dirY = directionX ? 0 : 1;

        
        for (let i=start; Math.abs(i)< Math.abs(end);i=i+increment) {
            

                let moveCase = $( '.square[x='   +   (Number($("." + this.style).attr("x"))+(i*dirX))   +   '][y='   +   (Number($("." + this.style).attr("y"))+(i*dirY))   +   ']');
                if (!moveCase.hasClass("wall") ) {
                    moveCase.addClass("moveCase");
                } else { break; }
            
        }

    }

    showMove() {        
        
        this.showDirection(1, 4, 1, true);
        this.showDirection(-1, -4, -1, true);
        this.showDirection(1, 4, 1, false);
        this.showDirection(-1, -4, -1, false);

    }

    move() {
        
        //$(".square").removeClass("moveCase");
    }


 
    
}