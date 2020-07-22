class Main {

    constructor(currentPlayer = 1) {
        this.currentPlayer = currentPlayer;
        this.loadMap();
        this.loadWeapon();
        this.loadPlayer();
        this.playerTurn();
           
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
        this.player1 = new Player("Norbert",this.sword, Config.mapSize,"player1");
        this.player2 = new Player("Sakura",this.sword1, Config.mapSize,"player2");

    }

    

    playerTurn() {

        console.log(this.currentPlayer);

        //this.player1.showMove();
        //this.player1.move();
        if(this.currentPlayer === 1) {
            
            this.player1.turn();
            this.currentPlayer = 2;
            
            

        } else if (this.currentPlayer === 2) {
            
            this.player2.turn();
            this.currentPlayer = 1;
            
        }        
    }
/*
    attack(player, target) {
        if (target.posture === "attack") {

            target.healh -= this.player.attackPower;

        } else {
            target.healh -= floor( this.player.attackPower / 2 );
        }
    }

*/

}

let main = new Main();




