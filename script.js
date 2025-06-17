function cadastrarProduto() {
    const nome = document.getElementById('nome').value.trim();
    const preco = parseFloat(document.getElementById('preco').value);
    const codigo = document.getElementById('codigo').value.trim();
  
    if (!nome || isNaN(preco) || !codigo) {
      alert("Preencha todos os campos corretamente!");
      return;
    }
  
    const novoProduto = { nome, preco, codigo };
  
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  
    const existente = produtos.find(p => p.codigo === codigo);
    if (existente) {
      alert("Esse código de barras já está cadastrado.");
      return;
    }
  
    produtos.push(novoProduto);
    localStorage.setItem('produtos', JSON.stringify(produtos));
  
    alert("Produto cadastrado com sucesso!");
  
    document.getElementById('nome').value = '';
    document.getElementById('preco').value = '';
    document.getElementById('codigo').value = '';
  }
  
  function buscarProduto() {
    const codigoBusca = document.getElementById('buscaCodigo').value.trim();
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
  
    const produto = produtos.find(p => p.codigo === codigoBusca);
  
    const resultadoDiv = document.getElementById('resultadoBusca');
  
    if (produto) {
      resultadoDiv.innerHTML = `
        <strong>Produto Encontrado:</strong><br>
        Nome: ${produto.nome}<br>
        Preço: R$ ${produto.preco.toFixed(2)}<br>
        Código de Barras: ${produto.codigo}
      `;
    } else {
      resultadoDiv.innerHTML = `<strong>Produto não encontrado.</strong>`;
    }
  }
  