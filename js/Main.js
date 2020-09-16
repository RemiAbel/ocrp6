class Main {
    constructor(currentPlayer = 1) {
        this.currentPlayer = currentPlayer;
        this.loadMap();
        this.loadWeapon();
        this.loadPlayer();
        this.displayPlayerTurn();            
    }

    start() {
        this.player1.turn();
    }

    loadMap() {
        this.map = new Map(Config.mapSize);
    }

    loadWeapon() {
        this.club = new Weapon("club", Config.mapSize,Config.clubDamage,);
        this.dagger = new Weapon("dagger", Config.mapSize,Config.daggerDamage);
        this.ax = new Weapon("ax", Config.mapSize,Config.axDamage);
        this.saber = new Weapon("saber",Config.mapSize,Config.saberDamage);
        this.sword = new Weapon("sword",Config.mapSize,Config.swordDamage,false);
        this.sword1 = new Weapon("sword1",Config.mapSize,Config.swordDamage,false);
        this.weapons = {
            club : this.club,
            dagger : this.dagger,
            ax : this.ax,
            saber: this.saber,
            sword : this.sword,
            sword1 : this.sword1,
        }
    }

    loadPlayer() {
        this.player1 = new Player("Player 1",this.sword, Config.mapSize,"player1");
        this.player2 = new Player("Player 2",this.sword1, Config.mapSize,"player2");
    }  

    playerTurn() {        
        $(".playerTurnName").html("Player "+this.currentPlayer +" turn");
        this.displayPlayerTurn();
            
        if(this.currentPlayer === 2) {
            if (this.player1.isPlayerAround()) { return;}
            this.player2.turn();
        } else  {
            if (this.player1.isPlayerAround()) { return;}
            this.player1.turn();            
        }                
    }

    fightTurn() {
        if (!$("#map").hasClass("hide")) {
            $("#map").addClass("hide");
        }
        if ($(".btnContainer").hasClass("hide")){
            $(".btnContainer").removeClass("hide");
        }        
        
        $(".playerTurnName").html("Player "+this.currentPlayer +" turn");
        this.displayPlayerTurn();        

        $(".attackBtn").off("click");

        $(".attackBtn").on("click",  () => {

            $("#windowPlayer"+this.currentPlayer).removeClass("shield");

            if (this.currentPlayer === 1) {
                
                this.currentPlayer=2;

                this.player1.attack(this.player2);
                return;
            }
            
            this.currentPlayer=1;

            this.player2.attack(this.player1);
        })

        

        $(".defBtn").off("click");
        
        $(".defBtn").on("click",  () => {

            this['player'+this.currentPlayer].posture = "defense";
            $("#windowPlayer"+this.currentPlayer).addClass("shield");

            if (this.currentPlayer === 1) {
                this.fightTurn();
                this.currentPlayer=2;
                return;
            }
            this.fightTurn();
            this.currentPlayer=1;
        })

        
    }

    displayPlayerTurn() {
        $(".playerTurnName").html("Player "+this.currentPlayer +" turn");
        if (this.currentPlayer==1) {
            $("#windowPlayer1").addClass("currentPlayer");
            $("#windowPlayer2").removeClass("currentPlayer");
        }
        else {
            $("#windowPlayer2").addClass("currentPlayer");
            $("#windowPlayer1").removeClass("currentPlayer");
        }

        

    }

    defense() {
        this['player'+this.currentPlayer].posture = "defense";
    }

    restart() {
        $(".restart").on("click",(e) => {
            $(".WinMessage").addClass("hide");

        })
    }


}

let main = new Main();
main.start();


$(".restart").on("click",(e) => {
    $(".winMessage").addClass("hide");
    $(".btnContainer").addClass("hide");
    $("#map").removeClass("hide");
    $("#map").html("");
    delete main;
    let main = new Main();
    main.start();    
})







