const itensCarrinho = {} //Vai guardar todos os itens no carrinho

function addCarrinho(itemNome, itemPreco) {

    if (itensCarrinho[itemNome]) { //Verifica se o item já tá no carrinho
        itensCarrinho[itemNome].quantidade++; //a quantidade do produto vai aumentar
        itensCarrinho[itemNome].precoTotal += itemPreco; //o preço vai aumentar
        itensCarrinho[itemNome].liItem.querySelector(".quantidade").innerHTML = itensCarrinho[itemNome].quantidade; //Mostra a nova quantidade
        itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2); // Mostra o novo preço
    } else {
        const liItem = document.createElement("li");
        liItem.innerHTML = `
        <div class="item">
        <span>${itemNome}</span>
        <button class="remove" onclick="removeCarrinho('${itemNome}', ${itemPreco})">-</button>
        <span class="quantidade">1</span>
        <button class="add" onclick="addCarrinho('${itemNome}', ${itemPreco})">+</button>
        <span class="preco-total">R$${itemPreco.toFixed(2)}</span>
        </div>
        `

        document.getElementById("itens-lista").appendChild(liItem);

        itensCarrinho[itemNome] = {
            quantidade: 1,
            precoTotal: itemPreco,
            liItem: liItem
        }
    }

    document.getElementById("preco-total").innerHTML = "Total R$" + precoTotal.toFixed(2);

    updateCarrinho()
}

function removeCarrinho(itemNome, itemPreco) {
    if (itensCarrinho[itemNome]) {
        if (itensCarrinho[itemNome].quantidade > 1) {
            itensCarrinho[itemNome].quantidade--
            itensCarrinho[itemNome].precoTotal -= itemPreco;
            itensCarrinho[itemNome].liItem.querySelector(".quantidade").innerHTML = itensCarrinho[itemNome].quantidade; //Mostra a nova quantidade
            itensCarrinho[itemNome].liItem.querySelector(".preco-total").innerHTML = "R$" + itensCarrinho[itemNome].precoTotal.toFixed(2); // Mostra o novo preço
        } else{
            document.getElementById("itens-lista").removeChild(itensCarrinho[itemNome].liItem)
            delete itensCarrinho[itemNome]
        }
        document.getElementById("preco-total").innerHTML = "Total R$" + precoTotal.toFixed(2);

        updateCarrinho()
    }
}

function updateCarrinho(){
    let cont = 0

    for(let item in itensCarrinho){
        cont += itensCarrinho[item].quantidade
    }
    document.getElementById("cont-carrinho").innerHTML = cont
}