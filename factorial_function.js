function calculerFactoriel(nombre) {
    if (nombre === 0 || nombre === 1) {
        return 1;
    } else {
        return nombre * calculerFactoriel(nombre - 1);
    }
}

let nombre = 5;
let resultat = calculerFactoriel(nombre);
console.log("Le factoriel de", nombre, "est", resultat);
