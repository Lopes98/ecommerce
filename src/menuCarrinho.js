import { catalogo, salvarLocalStorage, lerLocalStorage } from "./utilidades"

let idsProdutoCarrinhoComQuantidade = lerLocalStorage('carrinho') ?? {}

function abrirCarrinho() {
    document.getElementById('carrinho').classList.add('right-[0px]')
    document.getElementById('carrinho').classList.remove('right-[-360px]')
}

function fecharCarrinho() {
    document.getElementById('carrinho').classList.remove('right-[0px]')
    document.getElementById('carrinho').classList.add('right-[-360px]')
}

function irParaCheckout(){
    if(Object.keys(idsProdutoCarrinhoComQuantidade).length === 0){
        return
    }    
    window.location.href = './checkout.html'
}

export function inicializarCarrinho() {
    const botaoFecharCarrinho = document.getElementById('fechar-carrinho')
    const botaoAbrirCarrinho = document.getElementById('abrir-carrinho')
    const botaoIrParaCheckout = document.getElementById('finalizar-compra')

    botaoFecharCarrinho.addEventListener('click', fecharCarrinho)
    botaoAbrirCarrinho.addEventListener('click', abrirCarrinho)
    botaoIrParaCheckout.addEventListener('click', irParaCheckout)
}

function removerDoCarrinho(idProduto) {
    delete idsProdutoCarrinhoComQuantidade[idProduto]
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade)
    atualizarPrecoCarrinho()
    renderizarProdutosCarrinho()
}

function incrementarQuantidadeProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto]++
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade)
    atualizarPrecoCarrinho()
    atualizarInformaçãoQuantidade(idProduto)
}

function decrementarQuantidadeProduto(idProduto){
    if(idsProdutoCarrinhoComQuantidade[idProduto] === 1) {
        removerDoCarrinho(idProduto)
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto]--
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade)
    atualizarPrecoCarrinho()
    atualizarInformaçãoQuantidade(idProduto)
}

function atualizarInformaçãoQuantidade(idProduto){
    const produto = catalogo.find(p => p.id === idProduto)
    document.getElementById(`quantidade-${produto.id}`).innerText = idsProdutoCarrinhoComQuantidade[produto.id]
}

function desenharProdutoNoCarrinho(idProduto){
    const produto = catalogo.find(p => p.id === idProduto)
    const containerProdutosCarrinho = document.getElementById('produtos-carrinho')

    const elementoArticle = document.createElement('article')
    const articleClasses = ['flex', 'h-24', 'bg-neutral-100', 'p-2', 'rounded-lg', 'relative']

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass)
    }

    const cartaoProdutoCarrinho = `
    <button id="remover-item-${produto.id}" class="absolute top-0 right-1">
        <i class="fa-solid fa-circle-xmark text-neutral-500 hover:text-neutral-900 duration-200"></i>
    </button>
    <img src="./assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="rounded-lg h-20">
    <div class="p-2 flex flex-col justify-between">
        <p class="text-neutral-900 text-sm">${produto.nome}</p>
        <p class="text-neutral-400 text-xs">Tamanho: 42</p>
        <p class="text-green-700 text-lg">R$ ${produto.preco}</p>
    </div>
    <div class='flex text-neutral-950 items-end absolute bottom-0 right-1 text-lg'>
        <button id='decrementar-${produto.id}' class='mb-1 bg-neutral-900 text-neutral-200 w-5 rounded-md hover:bg-neutral-300 hover:text-neutral-900 duration-200'> - </button>
        <p id='quantidade-${produto.id}' class='ml-2 mb-1'> ${idsProdutoCarrinhoComQuantidade[produto.id]} </p>
        <button id='incrementar-${produto.id}' class='ml-2 mb-1 bg-neutral-900 text-neutral-200 w-5 rounded-md hover:bg-neutral-300 hover:text-neutral-900 duration-200'> + </button>
    </div>`

    elementoArticle.innerHTML = cartaoProdutoCarrinho
    containerProdutosCarrinho.appendChild(elementoArticle)

    document.getElementById(`decrementar-${produto.id}`).addEventListener('click', () => decrementarQuantidadeProduto(produto.id))
    document.getElementById(`incrementar-${produto.id}`).addEventListener('click', () => incrementarQuantidadeProduto(produto.id))
    document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removerDoCarrinho(produto.id))
}

export function renderizarProdutosCarrinho(){
    const containerProdutosCarrinho = document.getElementById('produtos-carrinho')

    containerProdutosCarrinho.innerHTML = ''

    for (const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoNoCarrinho(idProduto)
    }
}

export function adicionarAoCarrinho(idProduto) {
    if(idProduto in idsProdutoCarrinhoComQuantidade){
        incrementarQuantidadeProduto(idProduto)
        return;
    }
    
    idsProdutoCarrinhoComQuantidade[idProduto] = 1
    salvarLocalStorage('carrinho', idsProdutoCarrinhoComQuantidade)
    desenharProdutoNoCarrinho(idProduto)
    atualizarPrecoCarrinho()
}

export function atualizarPrecoCarrinho(){
    const precoCarrinho = document.getElementById('preco-total')
    let precoTotalCarrinho = 0

    for (const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade){
        precoTotalCarrinho += catalogo.find(p => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho]
    }

precoCarrinho.innerText = `Total: R$ ${precoTotalCarrinho.toFixed(2)}`
}