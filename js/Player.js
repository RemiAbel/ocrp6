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

    showDirection(start, end,increment, directionX) {
        for (let i=start; Math.abs(i)< Math.abs(end);i=i+increment) {
            
            if (directionX){
                let moveCase = $( '.square[x='   +   (Number($("." + this.style).attr("x"))+i)   +   '][y='   +   Number($("." + this.style).attr("y"))   +   ']');
                if (!moveCase.hasClass("wall") ) {
                    moveCase.css("border-color", "white");
                } else { break; }
    
            } else {
                let moveCase = $( '.square[x='   +   Number($("." + this.style).attr("x"))   +   '][y='   +   (Number($("." + this.style).attr("y"))+i)   +   ']');
                if (!moveCase.hasClass("wall") ) {
                    moveCase.css("border-color", "white");
                } else { break; }

            }
        }

    }

    showMove() {

        let test = $( '.square[x='   +   (Number($("." + this.style).attr("x")))   +   '][y='   +   (Number($("." + this.style).attr("y")))   +   ']');
        test.css("border-color", "green");
        
        /*
        for (let i=1; i<4;i++) {

            let moveCase = $( '.square[x='   +   (Number($("." + this.style).attr("x"))+i)   +   '][y='   +   Number($("." + this.style).attr("y"))   +   ']');
            if (!moveCase.hasClass("wall") ) {
                moveCase.css("border-color", "white");
            } else { break; }
        }

        for (let j=-1; j>-4; j--) {
            let moveCase = $( '.square[x='   +   Number($("." + this.style).attr("x"))   +   '][y='   +   (Number($("." + this.style).attr("y"))+j)   +   ']');
            if (!moveCase.hasClass("wall") ) {
                moveCase.css("border-color", "white");
            } else { break; }
        }
        */

        this.showDirection(1, 4, 1, true);
        this.showDirection(-1, -4, -1, true);
        this.showDirection(1, 4, 1, false);
        this.showDirection(-1, -4, -1, false);

    }


 
    
}