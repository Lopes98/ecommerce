const catalogoProdutos = document.getElementById('container-produto')

function exibirTodos() {
    const produtosEscondidos = Array.from(catalogoProdutos.getElementsByClassName('hidden'))

    for(const produto of produtosEscondidos){
        produto.classList.remove('hidden')
    }
}

function esconderNike(){
    exibirTodos()
    const produtosNike = Array.from(catalogoProdutos.getElementsByClassName('nike'))

    for(const produto of produtosNike){
        produto.classList.add('hidden')
    }

}

function esconderAdidas(){
    exibirTodos()
    const produtosAdidas = Array.from(catalogoProdutos.getElementsByClassName('adidas'))

    for(const produto of produtosAdidas){
        produto.classList.add('hidden')
    }

}

export function inicializarFiltros(){
    document.getElementById('exibir-adidas').addEventListener('click', esconderNike)
    document.getElementById('exibir-nike').addEventListener('click', esconderAdidas)
    document.getElementById('exibir-todos').addEventListener('click', exibirTodos)
}