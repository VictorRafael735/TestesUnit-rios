function multMatriz(matr1, matr2) {
    //inicialização das variáveis auxiliares
    //sendo m o número de linhas e n o número de colunas
    let res = new Array();
    let linhas1 = matr1.length;
    let colunas1 = matr1[0].length;
    let linhas2 = matr2.length;
    if (colunas1 != linhas2) {
        console.log("Não é possível fazer a multiplicação")
        return null;
    } else {
        for (var i = 0; i < colunas1; i++) {
            res[i] = [];
            for (var j = 0; j < linhas2; j++) {
                res[i][j] = 0;
                for (var k = 0; k < linhas1; k++) {
                    res[i][j] += matr1[i][k] * matr2[k][j];
                }
            }
        }
    }
    return res;
}
module.exports = multMatriz;