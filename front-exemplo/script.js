var x = 1;
function recuperar() {
    /*
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.status != 200){
            // funcao que deu certo
        }
        else{
            // funcao que trata o que deu errado
        }
        console.log("mudou de estado "+xmlhttp.status +" "+xmlhttp.readyState);
        console.log(xmlhttp.responseText);
    }

    xmlhttp.open("get","https://leetir.com.br:8443/categoria");
    xmlhttp.send();  // este é o momento do disparo
    */

    /* exemplo de 1 unico fetch 
    fetch("https://leetir.com.br:8443/produto/584")
        .then((resultado) => {
            resultado.json().then(
                produto => {
                    console.log(produto);
                }
            )
        })
        .catch((erro) => {
           console.log("eita..deu ruim");
            console.log(erro);
        })

        */

    // so pra exemplificar o map
    /*
 let vetor = [1, 2, 3, 4, 5];
 console.log("Vetor original = ")
 console.log(vetor);

 console.log("vou fazer uma brincadeirinha aqui");
 vetor.map(e => {
     e = e+1;
     console.log("elemento alterado = "+e);
 });

 console.log("Vetor na versao final")
 console.log(vetor);
*/



    /* exemplo de varios fetchesez simultaneos */
    var produto1 = fetch("https://leetir.com.br:8443/produto/582");
    var produto2 = fetch("https://leetir.com.br:8443/produto/583");
    var produto3 = fetch("https://leetir.com.br:8443/produto/584");

    Promise.all([produto1, produto2, produto3])
        .then(res => {
            return Promise.all(res.map(elemento => elemento.json() ))
        })
        .then(resultados => {
            document.getElementById("prod1").innerHTML = resultados[0].nome;
            document.getElementById("prod2").innerHTML = resultados[1].nome;
            document.getElementById("prod3").innerHTML = resultados[2].nome;
        })        

}


/* como poderíamos ler esse cara? 
 
let resultado = fetch("http://leetir.com.br:8443/produto/584")
let produto   = resultado.json();
console.log(produto)

*/

async function recupera2() {
    try {
        let resultado = (await fetch("https://leetir.com.br:8443/produto/584"));
        let produto = (await resultado).json();
        console.log(produto);
    }
    catch (erro) {
        console.log("eita que deu ruim...");
    }
}
