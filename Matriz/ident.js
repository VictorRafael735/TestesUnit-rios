//retorna uma matriz identidade com o tamanho do parâmetro
function ident(num) {
    let identidade = new Array(num);
    for (var i = 0; i < identidade.length; i++) {
        identidade[i] = [];
        for (var j = 0; j < identidade.length; j++) {
            if (i == j)
                identidade[i][j] = 1;
            else
                identidade[i][j] = 0;

        }
    }
    return identidade;
}

module.exports = ident;