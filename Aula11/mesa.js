let filmes = ["star wars", "totoro", "rocky", "pulp fiction", "la vida es bella"];
let animados = ["toy story", "finding nemo", "kung-fu panda", "wally", "fortnite"];

// EX1
function converterMaiusculas(array){
    for(let i=0; i<filmes.length; i++){
        array[i] = array[i].toUpperCase();
    }

    return filmes;
}
console.log(converterMaiusculas(filmes))


// EX2
function passagemElemento(filme, animados){
    while(animados.length > 0){
        filme.push(animados.pop().toUpperCase());
    }
    return filme;
}
console.log(passagemElemento(filmes, animados))

// EX3
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararClassificacoes(asia, europa) {
    let comparacoesAsiaEuropa = [];
    for (let i = 0; i < asia.length; i++) {
        comparacoesAsiaEuropa[i] = asia[i] === europa[i];
    }
    return comparacoesAsiaEuropa;
}

console.log( compararClassificacoes(asiaScores, euroScores) );