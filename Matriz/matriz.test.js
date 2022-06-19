const multMatriz = require('./matriz.js');
const ident = require('./ident.js');
const matr1 = [[4,5],[3,4]];
const matr2 = [[2,3],[2,2]];
const res = [[18,22], [14,17]];
const matr1Inv = [[4,-5],[-3,4]];
const matr3 = [[1,2]];

test('A multiplicação das matrizes deve estar certa', () => {
    expect(multMatriz(matr1,matr2)).toStrictEqual(res);
});

test('Multiplicação da matriz por sua inversa deve ser a identidade', () =>{
    expect(multMatriz(matr1,matr1Inv)).toStrictEqual(ident(2));
});

test('Se a multiplicação não for possível deve retornar nulo', () =>{
    expect(multMatriz(matr1, matr3)).toBeNull();
});