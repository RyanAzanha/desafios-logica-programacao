// Criar uma função que exibe "Olá, mundo!" no console.
function comprimentar() {
    console.log('Olá, mundo!');
}
comprimentar();

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function comprimentarNome(nome) {
    console.log(`Olá, ${nome}!`);
}
comprimentarNome('Ryan');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numeroDobrado(numero) {
    let dobro = numero * 2;
    console.log(`O dobro de ${numero} é ${dobro}`);
}
numeroDobrado(10);

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
 function mediaNumeros(media1, media2, media3) {
    let mediaTotal = (media1+media2+media3)/3;
    console.log(`A media dos números é ${mediaTotal}`);
 }
 mediaNumeros(10, 9, 8);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaior(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}
numeroMaior(50,20);

// Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicacao(numeroMultiplicado) {
    let mult = numeroMultiplicado*numeroMultiplicado;
    console.log(` O resultado de ${numeroMultiplicado} * ${numeroMultiplicado} é ${mult}`);
}
multiplicacao(10);