//Transforma o número em array de caracteres, reverte, e o transforma novamente em numero.
function espelho(numero) {
    if(typeof numero != 'number')
        throw new Error('O valor deve ser um número');
    return parseInt(numero.toString().split('').reverse().join('')) * Math.sign(numero);
}
module.exports = espelho;