class Main {

    constructor() {
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
        this.sword2 = new Weapon("sword",Config.mapSize,Config.swordDamage,false);
        this.weapons = {
            club : this.club,
            dagger : this.dagger,
            ax : this.ax,
            saber: this.saber,
            sword1 : this.sword1,
            sword2 : this.sword,
        }


    }

    loadPlayer() {
        this.player1 = new Player("Norbert",this.sword, Config.mapSize,"player1");
        this.player2 = new Player("Sakura",this.sword2, Config.mapSize,"player2");

    }

    playerTurn() {
        this.player1.showMove();
        this.player1.move();
        


    }




}

let main = new Main();


