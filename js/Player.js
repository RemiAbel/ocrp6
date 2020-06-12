// class joueurs

class Player {
    constructor(name,mapSize=8, style, health = 100, attackPower = 20) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.mapSize = mapSize;
        this.style = style;
        this.creatPlayer(name);
        this.getInfo();
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

    getInfo() {
        $("#" + this.style + "Name").html("Nom : " + this.name);
        $("#" + this.style + "HP").html("HP : " + this.health);
        $("#" + this.style + "Power").html("Puissance : " + this.attackPower);

        
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
        $(".moveCase").on("click",(e) => {
    

            $("." + this.style ).removeClass("player " + this.style);
        
            $(e.target).addClass("player " + this.style);
        
            $(".square").removeClass("moveCase");
            
        });
        
    }


 
    
}