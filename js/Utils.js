class Utils {
    // fonction de choix d'une case aléatoire
    static randomSquare(max, min=0) {
        let random = $( '.square[x=' + (Math.floor(Math.random() * (max - min ))+ min) + '][y=' + (Math.floor(Math.random() * (max - min ))+ min) + ']');
        return random;
    }
}