import { lerLocalStorage, desenharProdutoNoCarrinhoSimples } from "./src/utilidades";

function criarPedidoHistorico(pedidoComData) {
    const elementoPedido = `
    <p class='text-xl text-bold my-4'> Dia ${new Date(pedidoComData.dataPedido).toLocaleDateString('pt-BR', {
        hour: '2-digit', minute:'2-digit'})} </p>
    <section id='container-pedidos-${pedidoComData.dataPedido}' class='bg-neutral-300 p-3 rounded-md w-[50%]'>

    </section>
    `
    const main = document.getElementsByTagName('main')[0]
    main.innerHTML += elementoPedido

    for(const idProduto in pedidoComData.pedido){
        desenharProdutoNoCarrinhoSimples(idProduto, `container-pedidos-${pedidoComData.dataPedido}`, pedidoComData.pedido[idProduto])
    }
}

function renderizarHistóricoPedidos(){
    const historico = lerLocalStorage('historico')
    for(const pedidoComData of historico){
        criarPedidoHistorico(pedidoComData)
    }
}

renderizarHistóricoPedidos()