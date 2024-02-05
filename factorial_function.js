function calculerFactoriel(nombre) {
    if (nombre === 0 || nombre === 1) {
        return 1;
    } else {
        return nombre * calculerFactoriel(nombre - 1);
    }
}
module.exports = calculerFactoriel;
