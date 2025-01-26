const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

//? BOTAO DE AVANCAR

//!passo2
btnAvancar.addEventListener("click",function(){ ;
    if(cartaoAtual === cartoes.length - 1) return;

//!passo4
const cartaoSelecionado = document.querySelector('.selecionado');

cartaoSelecionado.classList.remove("selecionado");

//!passo3
cartaoAtual++
cartoes[cartaoAtual].classList.add("selecionado")

});

//?BOTAO DE VOLTAR

const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click",function(){ ;

    if(cartaoAtual === 0) return;

//!passo4
    esconderCartaoSelecionado();

//!passo3
cartaoAtual--
mostrarCartao();

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove("selecionado");
}

