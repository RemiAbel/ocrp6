class Main {

    constructor() {
        this.loadMap();
        this.loadWeapon();
        this.loadPlayer();    
    }

    loadMap() {
        this.map = new Map(Config.mapSize);


    }

    loadWeapon() {
        this.club = new Weapon("club", Config.mapSize,Config.katanaDamage,);
        this.dagger = new Weapon("dagger", Config.mapSize,Config.daggerDamage);
        this.ax = new Weapon("ax", Config.mapSize,Config.axDamage);
        this.saber = new Weapon("saber",Config.mapSize,Config.saberDamage);

    }

    loadPlayer() {
        this.player1 = new Player("Norbert",Config.mapSize,"player1");
        this.player2 = new Player("Sakura",Config.mapSize,"player2");

    }
}

let main = new Main();

main.player1.showMove();
