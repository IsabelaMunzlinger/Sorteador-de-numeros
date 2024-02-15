let alugar = 1;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${alugar}`);
}

function alterarStatus (id){
    let gameClicado = document.getElementById(`game-${id}`);
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let nomeDoJogo = gameClicado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')){
        if(confirm(`Você tem certeza que deseja devolver o jogo ${nomeDoJogo.textContent}?`)){
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return');
        alert(`Jogo ${nomeDoJogo.textContent} devolvido`);
        alugar--;
        }
    }else{
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        alugar++;
    }

    contarEExibirJogosAlugados();
}