function calculerCombinaisons(n, k) {
    if (k < 0 || k > n) {
        return 0;
    }
    return factoriel(n) / (factoriel(k) * factoriel(n - k));
}
function factoriel(nombre) {
    if (nombre === 0 || nombre === 1) {
        return 1;
    } else {
        return nombre * factoriel(nombre - 1);
    }
}

module.exports = calculerCombinaisons;

