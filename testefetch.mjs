import fetch from 'node-fetch';

/*
fetch("https://leetir.com.br:8443/produto/584")
    .then((res)=>{
        res.json()
        .then(produto => {
            console.log(produto);   
        })
        .catch(erro2 => {
            console.log("eita que deu ruim ao extrair a resposta");
        })
    })
    .catch(erro => {
        console.log("eita que deu ruim ao buscar a informação");
    })
  */  

/*async function teste() {
    try {
        let resultado = (await fetch("https://leetir.com.br/produto/548"));
        let produto = (await resultado.json());
        console.log(produto);
    }
    catch (erro) {
        console.log("eita que deu ruim...");
    }
    finally{
        console.log("-------------------------------------------------------");
        console.log("dando certo ou dando ruim, eu executo!!!")
    }    
}

teste();
*/