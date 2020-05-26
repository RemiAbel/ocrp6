class Utils {
    // fonction de choix d'une case aléatoire

    static randomSquare(mapSize) {
        let random = $( '.square[x='   +   Math.floor(Math.random() * mapSize )   +   '][y='   +   Math.floor(Math.random() * mapSize )  +   ']');
        return random;

    }
}