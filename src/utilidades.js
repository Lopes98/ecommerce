export const catalogo = [
    {
        id: '1',
        nome:"Tênis Nike Air Force 1 '07",
        marca: 'Nike',
        preco: 799.99,
        imagem: 'airforce-branco-e-vermelho.webp',
        nike: true
    },
    {
        id: '2',
        nome:"Tênis Nike Downshifter 12",
        marca: 'Nike',
        preco: 239.99,
        imagem: 'downshifter-branco.webp',
        nike: true
    },
    {
        id: '3',
        nome:"Tênis Jordan MVP",
        marca: 'Nike',
        preco: 1299.99,
        imagem: 'jordan-vermelho-e-laranja.webp',
        nike: true
    },
    {
        id: '4',
        nome:"Tênis Nike Metcon 9 AMP",
        marca: 'Nike',
        preco: 1299.99,
        imagem: 'metcon-branco.webp',
        nike: true
    },
    {
        id: '5',
        nome:"Tênis Nike Air Max Alpha Trainer 5",
        marca: 'Nike',
        preco: 629.99,
        imagem: 'airmax-cinza-e-verde.webp',
        nike: true
    },
    {
        id: '6',
        nome:"Tênis Nike Court Vision Low Next Nature",
        marca: 'Nike',
        preco: 449.99,
        imagem: 'court-branco-e-laranja.webp',
        nike: true
    },
    {
        id: '7',
        nome:"Tênis Jordan Tatum 1 V3",
        marca: 'Nike',
        preco: 999.99,
        imagem: 'tatum-preto.webp',
        nike: true
    },
    {
        id: '8',
        nome:"Tênis Nike Air Force 1 Mid '07",
        marca: 'Nike',
        preco: 1099.99,
        imagem: 'airforce-vermelho-e-preto.webp',
        nike: true
    },
    {
        id: '9',
        nome:"Chuteira Nike Mercurial Vapor 15 Club Futsal",
        marca: 'Nike',
        preco: 449.99,
        imagem: 'mercurial-azul-e-preta.webp',
        nike: true
    },
    {
        id: '10',
        nome:"Tênis Nike Quest 5",
        marca: 'Nike',
        preco: 319.99,
        imagem: 'quest-branco-e-laranja.webp',
        nike: true
    },
    {
        id: '11',
        nome:"Tênis Nike Renew Ride 3",
        marca: 'Nike',
        preco: 439.99,
        imagem: 'renew-preto-e-vermelho.webp',
        nike: true
    },
    {
        id: '12',
        nome:"Tênis Air Jordan 1 Mid",
        marca: 'Nike',
        preco: 1199.99,
        imagem: 'jordan-preto-e-vermelho.webp',
        nike: true
    },
    {
        id: '13',
        nome:"Jordan Nu Retro 1 Palomino",
        marca: 'Nike',
        preco: 899.99,
        imagem: 'jordan-nu-preto-e-marrom.webp',
        nike: true
    },
    {
        id: '14',
        nome:"Tênis Nike Pegasus Turbo Next Nature",
        marca: 'Nike',
        preco: 719.99,
        imagem: 'pegasus-preto-e-branco.webp',
        nike: true
    },
    {
        id: '15',
        nome:"Tênis Ultimashow",
        marca: 'Adidas',
        preco: 249.99,
        imagem: 'ultimashow-preto.webp',
        nike: false
    },
    {
        id: '16',
        nome:"Tênis Superstar",
        marca: 'Adidas',
        preco: 499.99,
        imagem: 'superstar-branco.webp',
        nike: false
    },
    {
        id: '17',
        nome:"Tênis NMD_R1",
        marca: 'Adidas',
        preco: 599.99,
        imagem: 'nmd-preto.webp',
        nike: false
    },
    {
        id: '18',
        nome:"Tênis Run Falcon 2.0",
        marca: 'Adidas',
        preco: 229.99,
        imagem: 'run-falcon-rosa.webp',
        nike: false
    },
    {
        id: '19',
        nome:"Tênis Handball Spezial",
        marca: 'Adidas',
        preco: 699.99,
        imagem: 'handball-verde.webp',
        nike: false
    },
    {
        id: '20',
        nome:"Tênis Pureboost 22",
        marca: 'Adidas',
        preco: 539.99,
        imagem: 'pureboost-preto.webp',
        nike: false
    },
    {
        id: '21',
        nome:"Tênis Trae Young 3",
        marca: 'Adidas',
        preco: 1399.99,
        imagem: 'trae-preto-e-rosa.webp',
        nike: false
    },
    {
        id: '22',
        nome:"Tênis Ultraboost 22",
        marca: 'Adidas',
        preco: 699.99,
        imagem: 'ultraboost-preto.webp',
        nike: false
    },
    {
        id: '23',
        nome:"Tênis Samba OG",
        marca: 'Adidas',
        preco: 699.99,
        imagem: 'samba-preto.webp',
        nike: false
    },
    {
        id: '24',
        nome:"Tênis Racer TR23",
        marca: 'Adidas',
        preco: 599.99,
        imagem: 'racer-rosa.webp',
        nike: false
    },
    {
        id: '25',
        nome:"Chuteira X Crazyfast Brazil.3 Society",
        marca: 'Adidas',
        preco: 599.99,
        imagem: 'chuteira-x-azul.webp',
        nike: false
    },
    {
        id: '26',
        nome:"Chuteira Predator Accuracy Injection.3 Society",
        marca: 'Adidas',
        preco: 599.99,
        imagem: 'predator-preta-e-verde.webp',
        nike: false
    },
    {
        id: '27',
        nome:"Chuteira Artilheira V Futsal",
        marca: 'Adidas',
        preco: 269.99,
        imagem: 'artilheira-preta.webp',
        nike: false
    },
    {
        id: '28',
        nome:"Chuteira Deportivo II Futsal",
        marca: 'Adidas',
        preco: 279.99,
        imagem: 'deportivo-preta.webp',
        nike: false
    },
    
]

export function salvarLocalStorage(chave, info) {
    localStorage.setItem(chave, JSON.stringify(info))
}

export function lerLocalStorage(chave){
    return JSON.parse(localStorage.getItem(chave))
}

export function apagarLocalStorage(chave){
    localStorage.removeItem(chave)
}

export function desenharProdutoNoCarrinhoSimples(idProduto, idContainerHtml, quantidadeProduto){
    const produto = catalogo.find(p => p.id === idProduto)
    const containerProdutosCarrinho = document.getElementById(idContainerHtml)

    const elementoArticle = document.createElement('article')
    const articleClasses = ['flex', 'h-24', 'bg-neutral-100', 'p-2', 'rounded-lg', 'relative', 'mb-2', 'w-auto']

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass)
    }

    const cartaoProdutoCarrinho = `
    <img src="./assets/img/${produto.imagem}" alt="Carrinho: ${produto.nome}" class="rounded-lg h-20">
    <div class="p-2 flex flex-col justify-between">
        <p class="text-neutral-900 text-sm">${produto.nome}</p>
        <p class="text-neutral-400 text-xs">Tamanho: 42</p>
        <p class="text-green-700 text-lg">R$ ${produto.preco}</p>
    </div>
    <div class='flex text-neutral-950 items-end absolute bottom-0 right-1 text-lg'>
        <p id='quantidade-${produto.id}' class='ml-2'> ${quantidadeProduto} </p>
    </div>`

    elementoArticle.innerHTML = cartaoProdutoCarrinho
    containerProdutosCarrinho.appendChild(elementoArticle)
}