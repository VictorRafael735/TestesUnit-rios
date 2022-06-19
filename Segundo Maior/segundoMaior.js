//ordena o array, e então retorna o segundo maior
function segundoMaior(arr) {
    const string = arr.findIndex(elemento => typeof elemento != 'number') >-1;
    if(string)
        throw new Error('O array precisa ser somente de números');
    if (arr.length === 1 || arr.length === 0 || (arr.length === 2 && arr[0] === arr[1]))
        throw new Error('Erro, não foi possível fazer a comparação');
    return arr.sort((a, b) => b - a)[1];
}
module.exports = segundoMaior;