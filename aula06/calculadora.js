//1- Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.
//Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
function adicionar(x,y){
    return (x + y);
}
//Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
function subtracao(x,y){
    return (x-y);
}
//Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
function multiplicacao(x,y){
    return (x*y);
}
//Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.
function divisao(x,y){
    return (x/y);
}


//1- No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
console.log ("-------------- Teste de Operações / Calculadora --------------")

//Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
console.log(15+10)
console.log(50-25)

//Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
console.log(5*5)

//Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
console.log (100/4)

//Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.
console.log (100/0)


function quadradoDoNumero(x){
    return multiplicacao(x,x);
}
console.log(quadradoDoNumero(3));

function mediaDeTresNumeros(x,y,z){
    let soma1= adicionar(x,y)
    let soma2= adicionar(soma1,z)
    return divisao(soma2,3);
}
console.log(mediaDeTresNumeros(10,5,15));

function calculaPorcentagem(n1, n2) {
    let result = multiplicacao(n1, n2)
  
    return divisao(result, 100)
  }
  
  function geradorDePorcentagem(n1, n2) {
    let result = divisao(n1, n2)
  
    return multiplicacao(result, 100)
  }