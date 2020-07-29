// class joueurs

class Player {
    constructor(name, weapon, mapSize=8, style, health = 100, attackPower = 20, posture = "attack") {
        this.name = name;
        this.health = health;
        this.attackPower = attackPower;
        this.mapSize = mapSize;
        this.style = style;
        this.weapon = weapon;
        this.posture = posture;
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
                    random.attr("playerWeapon", "sword");
                    playerOk = true;
                }

            } else {

                let random = Utils.randomSquare(Math.floor(this.mapSize), Math.floor(this.mapSize*2/3));

                if (!random.hasClass("weapon") && !random.hasClass("wall") && !random.hasClass("player")) {
                    random.addClass("player");
                    random.addClass(this.style);
                    random.attr("playerWeapon", "sword1");
                    playerOk = true;
                }
            }
        }
    }

    getInfo() {
        $("." + this.style + "Name").html(this.name);
        $("." + this.style + "HP").html("HP : " + this.health);
        $("." + this.style + "Power").html("Puissance : " + this.attackPower);
        let weaponName = this.weapon.weaponType;

        if (weaponName == "sword1") { weaponName = "sword"}    
        $("." + this.style + "Weapon").html("Arme : " + weaponName);
              
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
                if ( !moveCase.hasClass("wall") && !moveCase.hasClass("player") ) {
                    moveCase.addClass("moveCase");
                } else { break; }            
        }

    }
    // Montre les cases jouables par le joueur.
    showMove() {        
        
        this.showDirection(1, 4, 1, true);
        this.showDirection(-1, -4, -1, true);
        this.showDirection(1, 4, 1, false);
        this.showDirection(-1, -4, -1, false);

    }

    //fonction de changement de  l'arme equipé avec l'arme de la case.
    switchWeapons(square) {

        if (square.hasClass("weapon")){           
            
            let playerWeapon = this.weapon.weaponType;

            this.weapon = main.weapons[square.attr("weapon")];

            this.attackPower = main.weapons[square.attr("weapon")].damage;

            square.removeClass(main.weapons[square.attr("weapon")].weaponType);

            square.attr("weapon", playerWeapon );
            
            this.getInfo();    
        }
    }            

    isPlayerNear(start, end,increment, directionX) {

        const dirX = directionX ? 1 : 0;
        const dirY = directionX ? 0 : 1;
        
        for (let i=start; Math.abs(i)< Math.abs(end);i=i+increment) {            

            let moveCase = $( '.square[x='   +   (Number($("." + this.style).attr("x"))+(i*dirX))   +   '][y='   +   (Number($("." + this.style).attr("y"))+(i*dirY))   +   ']');
            if ( moveCase.hasClass("player") ) {
                return true;
            }             
        }
    }

    isPlayerAround() {        
        let playerAround = [
            this.isPlayerNear(1, 2, 1, true),
            this.isPlayerNear(-1, -2, -1, true),
            this.isPlayerNear(1, 2, 1, false),
            this.isPlayerNear(-1, -2, -1, false),
        ]

        return playerAround.includes(true);
 

    }


    // déplace le joueur quand il clic sur une case en surbrillance
    move() {
        $(".moveCase").off("click");

        $(".moveCase").on("click",(e) => {   
                  
            //position de la case cliqué
            let positionX = $(e.target).attr("x");
            let positionY = $(e.target).attr("y");         

            //position avant mouvement du joueur
            let playerPositionX = $("." + this.style).attr("x");
            let playerPositionY = $("." + this.style).attr("y");

            // echange l'arme sur le plateau de jeu avec celle tenue par le joueur et modifie this.attackPower. 
            if ((positionX-playerPositionX) !== 0 ) {

                let end = positionX-playerPositionX;
                let increment = Math.sign(end);

                for (let i=0; Math.abs(i) <= Math.abs(end); i=i+increment ) {

                    let movePlayer = $( '.square[x='   +   (Number($("." + this.style).attr("x"))+i)   +   '][y='   +   $("." + this.style).attr("y")   +   ']');
                    
                    if (i!==0) { this.switchWeapons(movePlayer);}
                    
                }

            } else if ((positionY-playerPositionY) !== 0 ) {

                let end = positionY-playerPositionY;
                let increment = Math.sign(end);

                for (let i=0; Math.abs(i) <= Math.abs(end); i=i+increment ) {

                    let movePlayer = $( '.square[x='   +   $("." + this.style).attr("x")   +   '][y='   +   (Number($("." + this.style).attr("y"))+i)   +   ']');
                    
                    if ( i !== 0 ) { this.switchWeapons(movePlayer);}
                }
            }            

            $("." + this.style ).removeClass("player " + this.style);

            $("." + this.style ).removeAttr("playerWeapon");
            
        
            $(e.target).addClass("player " + this.style);

            $("." + this.style ).attr("playerWeapon", this.weapon.weaponType);

            $(".moveCase").off("click");
        
            $(".square").removeClass("moveCase"); 
            
            main.playerTurn();
        });        
    }
    
    attack(player) {

        this.posture = "attack";
        if (player.posture === "attack") {

            player.health -= this.attackPower;

        } else {
            player.health -= floor( this.attackPower / 2 );
        }

        player.getInfo();
        main.fightTurn();
    }
    
    


    turn() {

        this.showMove();
        this.move();
                
        
    }


    


  




}