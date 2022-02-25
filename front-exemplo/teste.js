function recuperaDados(){
    var codProduto = document.getElementById("txtCodigo").value;
    fetch("http://localhost:3000/produtos/"+codProduto)
        .then(res => res.json())
        .then(produto => {
            let produtoStr = `<h3> ${produto.codigo} </h3>
                              <p><Strong>${produto.descricao}</strong> R$ ${produto.preco} </p>
                              Estoque: ${produto.estoque}`;
            document.getElementById("conteudo").innerHTML = produtoStr;
        })
        .catch(err => {
            alert("Eita que deu erro!!!");
        })
}


/**
 * 
 * 
 */

/*
try{
    res = await fetch("http://localhost:3000/produtos")
    produto = await res.json();
}
catch(err){

}
monto a StringTemplate e substituo o HTML da div
*/