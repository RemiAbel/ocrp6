// class de genération de la carte

class Map {
    
    constructor(mapSize=8) {
        this.map = $("#map");
        this.mapSize = mapSize;
        this.creatMap(mapSize);
        this.wallNumber = Math.floor(this.mapSize * 1.5 );
        this.creatWall();
    }

    // fonction de création de la map
    creatMap(n) {

        for (let i=0; i<n; i++) {
            
            let row = "";
            for (let j=0; j<n; j++) {
                
                row += "<div class=\"square\" x=\"" + j + "\" y=\"" + i + "\"></div>";
            }
            this.map.append("<div class=\"row\">" + row + "</div>");
        }
    }

    // fonction de création des murs
    creatWall () {
        let n = 0;
    
        while ( n < this.wallNumber) {
            let wall = Utils.randomSquare(this.mapSize);
    
            if (!wall.hasClass("wall")) {
                wall.addClass("wall");
                n++;
            }
        }
    }
}