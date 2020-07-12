// class joueurs

class Player {
    constructor(name, weapon, mapSize=8, style, health = 100, attackPower = 20) {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.mapSize = mapSize;
        this.style = style;
        this.weapon = weapon;
        this.creatPlayer();
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
        $("#" + this.style + "Name").html(this.name);
        $("#" + this.style + "HP").html("HP : " + this.health);
        $("#" + this.style + "Power").html("Puissance : " + this.attackPower);
        $("#" + this.style + "Weapon").html("Arme : " + this.weapon.weaponType);
              
    }

    playerPositionX() {
        return $("." + this.style).attr("x");        
    }

    playerPositionY() {
        return $("." + this.style).attr("y");        
    }

    // ajoute la class moveCase au 3 prochaines cases des directions x+, x-, y+, y-.
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

    switchWeapons(square) {

        if (square.hasClass("weapon")){   
            
            console.log(this.weapon);
            
            let playerWeapon = this.weapon.weaponType;    
            
            //console.log(playerWeapon, main.weapons, square.attr("weapon"));

            this.weapon = main.weapons[square.attr("weapon")];

            console.log(this.weapon);

            this.attackPower = main.weapons[square.attr("weapon")].damage;

            

            square.removeClass(main.weapons[square.attr("weapon")].weaponType);

            square.attr("weapon", playerWeapon );
            
            this.getInfo();    
        }
    }            

    // déplace le joueur quand il clic sur une case en surbrillance
    move() {
        $(".moveCase").off("click");

        $(".moveCase").on("click",(e) => {   
            //console.log()         

            let positionX = $(e.target).attr("x");
            let positionY = $(e.target).attr("y");
            console.log(positionX);
            console.log(positionY);


            let playerPositionX = $("." + this.style).attr("x");
            let playerPositionY = $("." + this.style).attr("y");

            // echange l'arme sur le plateau de jeu avec celle tenue par le joueur et modifie this.attackPower.           
            

            if ((positionX-playerPositionX) !== 0 ) {

                let end = positionX-playerPositionX;
                let increment = Math.sign(end);

                for (let i=0; Math.abs(i) <= Math.abs(end); i=i+increment ) {

                    let movePlayer = $( '.square[x='   +   (Number($("." + this.style).attr("x"))+i)   +   '][y='   +   $("." + this.style).attr("y")   +   ']');
                    
                    this.switchWeapons(movePlayer);
                }

            } else if ((positionY-playerPositionY) !== 0 ) {

                let end = positionY-playerPositionY;
                let increment = Math.sign(end);

                for (let i=0; Math.abs(i) <= Math.abs(end); i=i+increment ) {

                    let movePlayer = $( '.square[x='   +   $("." + this.style).attr("x")   +   '][y='   +   (Number($("." + this.style).attr("y"))+i)   +   ']');
                    
                    this.switchWeapons(movePlayer);
                }
            }            

            $("." + this.style ).removeClass("player " + this.style);
        
            $(e.target).addClass("player " + this.style);

            $(".moveCase").off("click");
        
            $(".square").removeClass("moveCase"); 
            
            main.playerTurn();
        });        
    }

    turn() {
        console.log(this.weapon);
        this.showMove();
        this.move();
    }
}