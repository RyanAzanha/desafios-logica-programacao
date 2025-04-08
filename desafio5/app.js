// Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let textoH1 = document.querySelector('h1');
textoH1.innerHTML = 'Hora do Desafio';

// Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function cliqueBotao() {
    console.log('O botão foi clicado');
}

// Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function cliqueAlert() {
    alert('Eu amo JS');
}

// Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function cliquePrompt() {
    let cidade = prompt('Qual nome da sua cidade');
    alert(`Estive em ${cidade} e lembrei de você`);
}

// Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function cliqueSoma() {
    alert('Digite dois numeros inteiros e faremos a soma');
    let numeroInt = parseInt(prompt('Primeiro numero'));
    let numeroInt2 = parseInt(prompt('Segundo numero'));
    let somaNumeros = (numeroInt + numeroInt2);
    alert(`A soma de ${numeroInt} + ${numeroInt2} é ${somaNumeros}`);
}