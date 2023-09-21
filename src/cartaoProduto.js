import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
    for (const produtoCatalogo of catalogo) {
        
        const cartaoProduto = `
        <div id="card-produto-${produtoCatalogo.id}" class='border-solid shadow-xl shadow-neutral-400 w-64 m-2 flex flex-col p-2 justify-between group rounded-lg ${produtoCatalogo.nike ? 'nike' : 'adidas'}'>
            <img src="./assets/img/${produtoCatalogo.imagem}" alt="${produtoCatalogo.nome}" class='pb-2 group-hover:scale-110 duration-300 my-3 rounded-lg'>
            <p class='text-sm'>${produtoCatalogo.marca}</p>
            <p class='text-sm'>${produtoCatalogo.nome}</p>
            <p class='text-sm'>R$ ${produtoCatalogo.preco}</p>
            <button id='adicionar-${produtoCatalogo.id}' class='bg-neutral-900 text-neutral-200 hover:bg-neutral-200 hover:text-neutral-900 duration-200'>
                <i class="fa-solid fa-cart-plus"></i>
            </button>
        </div>`;
        
        document.getElementById('container-produto').innerHTML += cartaoProduto
    }

    for (const produtoCatalogo of catalogo) {
        document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click', () => adicionarAoCarrinho(produtoCatalogo.id))
    }
}