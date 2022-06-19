const segundoMaior = require('./segundoMaior.js');

test ('Deve retornar o segundo maior número', () => {
    expect (segundoMaior([1,2])).toBe(1)
});
test('Deve retornar um throw Error', () => {
    expect(() => segundoMaior([1,'2'])).toThrow('O array precisa ser somente de números');
});
test('Deve retornar um throw Error', () => {
    expect(() => segundoMaior([1,1])).toThrow('Erro, não foi possível fazer a comparação');
});