const espelho = require ('./espelho.js');

test('Deve retornar o número reverso', () => {
    expect(espelho(123)).toBe(321);
});

test('Deve retornar o tipo "number"', () => {
    expect(typeof espelho(123)).toBe('number');
});

test('Deve retornar um throw Error', () => {
    expect(() => espelho('Erro')).toThrow('O valor deve ser um número');
});
