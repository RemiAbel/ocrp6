class Utils {
    // fonction de choix d'une case aléatoire

    static randomSquare(max, min=0) {
        let random = $( '.square[x=' + (Math.floor(Math.random() * (max - min ))+ min) + '][y=' + (Math.floor(Math.random() * (max - min ))+ min) + ']');
        return random;

    }


}


/*

Récupérer une case à des coordonnées définies
$( '.case[x='   +   y   +   '][y='   +   x   +   ']').css("background","red")

Récupérer les coordonnées de la case cliquée
$(".case").on("click",(e) => { console.log($(e.target).attr("x"), $(e.target).attr("y")) });

 Math.floor(Math.random() * (max - min + 1)) + min

*/