class Utils {
    // fonction de choix d'une case aléatoire

    static randomSquare(mapSize) {
        let random = $( '.square[x='   +   Math.floor(Math.random() * mapSize )   +   '][y='   +   Math.floor(Math.random() * mapSize )  +   ']');
        return random;

    }
}


/*

Récupérer une case à des coordonnées définies
$( '.case[x='   +   y   +   '][y='   +   x   +   ']').css("background","red")

Récupérer les coordonnées de la case cliquée
$(".case").on("click",(e) => { console.log($(e.target).attr("x"), $(e.target).attr("y")) });

*/