var valorTotal = [0, 0];
var valorProduto = [40.0, 15.0];
var qtd = [0, 0];

function adicionarItem(item) {
  var quantidade = document.getElementById("quantidade" + item);
  var total = document.getElementById("total" + item);
  qtd[item] += 1;
  valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
  quantidade.innerHTML = qtd[item];
  total.innerHTML = valorTotal[item].toFixed(2).replace(".", ",");
  valorCompra();
}

function removerItem(item) {
  if (qtd[item] > 0) {
    qtd[item] -= 1;
    var quantidade = document.getElementById("quantidade" + item);
    var total = document.getElementById("total" + item);
    quantidade.innerHTML = qtd[item];
    valorTotal[item] = Number.parseFloat(valorProduto[item]) * qtd[item];
    total.innerHTML = valorTotal[item].toFixed(2).replace(".", ",");
    valorCompra();
  }
}

function valorCompra() {
  var valorTotalCompra = document.getElementById("valorTotalCompra");
  var valor = 0;

  for (var i = 0; i < valorTotal.length; i++) {
    valor += valorTotal[i];
  }

  valorTotalCompra.innerHTML = valor.toFixed(2).replace(".", ",");
}

function compraBTN() {
  let elemento = document.getElementById("span");
  let btnAdicionarSpan = document.createElement("span");

  btnAdicionarSpan.style.display = "inline-block";
  btnAdicionarSpan.innerHTML = `
    <aside class="adocao-aside">
      <figure>
        <img src="/img/brinquedo-bola-tenis.png" alt="Bola de Tênis" />
        <div class="adocao-texto">
          <h4>Bola de Tênis Chuckit M - Pack com 2</h4>
          <h4>R$ 40,00</h4>
        </div>
        <button class="btn-principal">
          <a style="color: aliceblue" href="./carrinho.html">Comprar</a>
        </button>
      </figure>
    </aside>
`;
  elemento.appendChild(btnAdicionarSpan);
}
compraBTN();
