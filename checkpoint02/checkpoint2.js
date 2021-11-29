let frutasamarelas =['Melao', 'Mamao', 'Limao'];
let [fruta1, fruta2, fruta3]= frutasamarelas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(frutasamarelas);


function soletrar(texto){
    console.log(texto.replace('-', '').toLocaleUpperCase().split("").join("-"));
}

soletrar("digital-house");
soletrar("ctd");

for (var i=0; i<50; i+=10){
    console.log(i);
}
console.log(i);

function soma(a=1, b=3)
{return a+b;}

console.log(soma());
console.log(soma(3));
console.log(soma(1,2));

let idade = 20;
let acesso = '';

if (idade > 21){
    acesso = 'acesso proibido';

}else {
 acesso = 'acesso liberado';}

let numeros= [10, 8, 7, 99, 0, 1, 6];
numeros.sort(function(a,b){ return b-a;});
console.log (numeros)

let valor=5;
let fatorial=1;
for (let i = valor; i > 1; i--){
    fatorial*=i;}

    console.log("Fatorial ="+fatorial); //returns 120


    let valor=5;
    let fatorial=1;
    for (let i = valor; i > 1; i--){
        fatorial=i;}
    
        console.log("Fatorial ="+fatorial); //returns 2

let valor=5;
let fatorial=1;
for (let i = 0; i <=5; i++){
    fatorial*=i;}

    console.log("Fatorial ="+fatorial); //returns 0

let valor=5;
let fatorial=1;
for (let i = valor; i <=5; i++){
    fatorial*=i;}

    console.log("Fatorial ="+fatorial); //returns 5

let x=5;
let y = x++ + ++x;
console.log("y ="+y);
x=3;
y=x*(x + 1)*x++;
x=5;
y+3;
y*= x+1
console.log("x= "+x);
console.log("y= "+y);

var z=0;
for (var i=20; i<50; i+=10){
    z+=i;}
    console.log(z);

let frutasamarelas= ['banana'];
let frutasvermelhas= ['morango'];
let frutasverdes= ['limao'];

frutasvermelhas1=frutasvermelhas.map(fruta => fruta.toUpperCase());
let todasFrutas =[...frutasamarelas,...frutasvermelhas1,...frutasverdes];
console.log(todasFrutas);