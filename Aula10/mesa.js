let array = ['Supernatural','Sons of Anarchy','Game of Thrones','Prison Break']


//Acessar elementos específicos de um array.

    console.log(array[3]);

//Modificar cada um dos elementos de um array e imprimi-los no console.

array[0] = "Orphan Black";
array[1] = "The Walking Dead";
array[2] = "The Office";
array[3] = "Dark";
console.log(array);

//Adicionar elementos a um array.

array.push("Mandalorian")
array.unshift("Outlander", "Vikings")
console.log(array)

//Extrair elementos de um array.

let excluirUltimo = array.pop()
let excluirPrimeiro = array.shift()
console.log(array)


//Array Invertido

function imprimirInverso(){
    console.log(array.reverse());
}
function inverter(array){
    let newArray = array.reverse();
    return newArray;
}
imprimirInverso(array);



// somarArray() ???
// Simulação Array.join() ???
// Coleções de Filmes (e mais…) ???