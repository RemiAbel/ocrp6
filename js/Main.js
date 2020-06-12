class Main {

    constructor() {
        this.loadMap();
        this.loadWeapon();
        this.loadPlayer();
        this.player1Turn();    
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

    player1Turn() {
        this.player1.showMove()

    }


}

let main = new Main();

//main.player1.showMove();

$(".moveCase").click(function() {
    

    $(".player1").removeClass("player player1");

    $(this).addClass("player player1");

    $(".square").removeClass("moveCase");
    
});


