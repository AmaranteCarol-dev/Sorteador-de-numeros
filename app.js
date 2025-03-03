function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Proteção: verifica se "de" é maior ou igual a "até"
    if (de >= ate) {
        alert('O valor do campo "De" deve ser menor que o valor do campo "Até". Verifique!');
        return;
    }

    // Proteção: verifica se há números suficientes no intervalo para realizar o sorteio
    let totalNumerosPossiveis = ate - de + 1;
    if (quantidade > totalNumerosPossiveis) {
        alert(`O intervalo de números (${de} a ${ate}) não permite sortear ${quantidade} números sem repetição.`);
        return;
    }

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        do {
            numero = obterNumeroAleatorio(de, ate);
        } while (sorteados.includes(numero)); // Evita números repetidos

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(", ")}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
            botao.classList.remove('container__botao-desabilitado');
            botao.classList.add('container__botao');
    } else {
            botao.classList.remove('container__botao');
            botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao();
}