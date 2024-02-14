function sortear (){

    let quantidade = parseInt(document.getElementById('quantidade').value); //guarda o valor que vai ser inserido na variável quantidade
    let ate = parseInt(document.getElementById('ate').value);
    let de = parseInt(document.getElementById('de').value);

    if(de >= ate){
        alert('Reveja a entrada de valores');
        return;
    }

    let sorteados = [];
    let numero;''

    for (let i=0; i<quantidade; i++){
        numero = obterNumeroAleatorio (de, ate);

        while(sorteados.includes(numero)){
            numero = obterNumeroAleatorio (de, ate);

            if (quantidade > (ate - de + 1)) {
                alert('O campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
                return;
              }
            
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    let palavraNumero = sorteados > 1 ? 'Número sorteado' : 'Números Sorteados';
    resultado.innerHTML =  `<label class="texto__paragrafo">${palavraNumero}: ${sorteados}</label>`
    alterarStatusBotao();
}

function obterNumeroAleatorio (min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.rempve('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('ate').value = '';
    document.getElementById('de').value = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>` ;
    alterarStatusBotao();
}
