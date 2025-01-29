function adicionarProduto(nome, preco, tipo ) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome: nome, preco: preco,tipo:tipo });


    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}



function atualizarCarrinho() {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    const carrinhoElement = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total');
    let total = 0;

    carrinhoElement.innerHTML = '';

 
    carrinho.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nome}</td>
            <td>${item.tipo}</td>
            <td>${item.quantidade}</td>
            <td>R$${item.preco}</td>
            <td>R$${item.preco * item.quantidade}</td>
        `;
        carrinhoElement.appendChild(row);
        total += item.preco * item.quantidade;
    });


    totalElement.textContent = `Total: R$${total}`;
}



