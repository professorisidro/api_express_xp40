function recuperaDados(){
    fetch("http://localhost:3000/produtos")
        .then(res => res.json())
        .then(produto => {
            let produtoStr = `<h3> ${produto.id} </h3>
                              <p><Strong>${produto.descricao}</strong> R$ ${produto.preco} </p>
                              Estoque: ${produto.qtdEstoque}`;
            document.getElementById("conteudo").innerHTML = produtoStr;
        })
        .catch(err => {
            alert("Eita que deu erro!!!");
        })
}


/*
res = fetch("http://localhost:3000/produtos")
produto = res.json();

monto a StringTemplate e substituo o HTML da div
*/