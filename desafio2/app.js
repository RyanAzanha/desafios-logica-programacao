// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let perguntaSemana = prompt('Qual é o dia da semana');

if (perguntaSemana == 'Sabado', 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('boa semana');
}
// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numeroDigitado = prompt('Digite um número')

if (numeroDigitado > 0) {
    alert(`O número ${numeroDigitado} é positivo!`);
} else if (numeroDigitado < 0) {
    alert(`O número ${numeroDigitado} é negativo!`);
} else {
    alert(`O número ${numeroDigitado} é neutro!`);
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacaoJogo = prompt('Digite sua pontuação no jogo')

if (pontuacaoJogo >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar');
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldo = 2000;
alert(`Seu saldo é R$ ${saldo}`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuario = prompt('Qual seu nome')
alert(`Seja bem-vindo ${nomeUsuario}`);