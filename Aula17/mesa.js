let array = [2, 4, 6, 8, 10]
let array2 = array.map((item) => item -1)
console.log(array2)

let nomes = ["Madalena", "Maria Madalena", "Madalena"]
nomesFiltro = nomes.filter((item) => (item == "Madalena"))
console.log(nomesFiltro)

let numeros = [1, 2, 3, 4, 5, 6]
numerosReduce = numeros.reduce(function(acumulador, item){
    return acumulador + ' - ' + item
})
console.log(numerosReduce)

let animais = ["Burro", "Jegue", "Jumento", "Anta", "Presidente"]
let animais2 = animais.forEach(function(item){
    console.log("o animal é " + item)
})


//2 parte
// Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais 
//do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

let Palavras = ['Carro', 'Boneca', 'Televisão', 'Notebook'];

let PalavrasMaior = Palavras.filter((palavras) => {return palavras.length > 5})

console.log(PalavrasMaior);