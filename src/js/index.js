//pegar o botão "mostrar mais"
const botaoMostrarProjeto = document.querySelector('.btn-mostrar-projetos');

// para pegar os projetos que não aparecem na tela
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


//identificar o clique no botão 
botaoMostrarProjeto.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao()
})


function mostrarMaisProjetos() {
    //adiciona a classe "ativo" para mostrar os projetos 
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    })
}

function esconderBotao(){
    //pegar o botão e esconder o botão "mostrar mais"
    botaoMostrarProjeto.classList.add('remover');
}