btnCadastro = document.querySelector('#scanButton');
inputName = document.querySelector('#nameInput');
inputPreco = document.querySelector('#precoInput');
btnSearch = document.querySelector('#searchBtn');
inputBarcode = document.querySelector('#barcodeInput')


btnCadastro.addEventListener('click', function() {
    let nameProduto = inputName.value;
    let precoProduto = inputPreco.value;
    let codeproduto = inputBarcode.value;
    if (nameProduto && precoProduto && codeproduto) {
        alert(`Produto cadastrado:\nNome: ${nameProduto}\nPreço: ${precoProduto}\nCódigo: ${codeproduto}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }

    const produto = {
        id: codeproduto,
        nome: nameProduto,
        preco: precoProduto
      };
      
      localStorage.setItem('produto', JSON.stringify(produto));
    
      let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    console.log(produtoSalvo);
})

btnSearch.addEventListener('click', () => {
        let codeproduto = inputBarcode.value;
        if (codeproduto) {
            const produtoSalvo = JSON.parse(localStorage.getItem('produto'));
            if (produtoSalvo && produtoSalvo.id === codeproduto) {
                alert(`Produto encontrado:\nNome: ${produtoSalvo.nome}\nPreço: ${produtoSalvo.preco}\nCódigo: ${produtoSalvo.id}`);
            } else {
                alert('Produto não encontrado.');
            }
        } else {
            alert('Por favor, insira o código do produto para buscar.');
        }
    }
)



