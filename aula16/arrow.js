let bemVindo = () => 'Olá Mundo!';

let dobro = numero => numero * 2;

let soma = (a, b) => a + b;

let horaAtual = () => {
    let data = new Date();
    return data.getHours() + ':' +
        data.getMinutes();
}

console.log(bemVindo());
console.log(dobro(2));
console.log(soma(2,4));
console.log(horaAtual());


setTimeout(function () {
    console.log('Olá Mundo!')
}, 1000);

setInterval (function(){
    console.log('Olá Mundo!')
} , 1000);

function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome
}
console.log(nomeCompleto("Mateus", "Afonso"));

function bomDia(nome, sobrenome, callback){
    return 'Olá, ' + callback(nome, sobrenome)
}
console.log(bomDia('Mateus','Afonso',nomeCompleto))



function acaoCarro(callback){
    return callback();
}
console.log(acaoCarro(function(){
    return 'Olá'
}) );

function andar(){
    console.log('O carro está andando');
}

function parar(){
    console.log('O carro parou');
}
acaoCarro(andar);
acaoCarro(parar);
