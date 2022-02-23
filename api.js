const { application } = require("express");
const express = require("express")
const port = process.env.PORT || 3000;
const cors = require("cors");

console.log("Porta que identifica o express = " + port);

let listaProdutos = [
    {
        id: 1234,
        descricao: "Computador cheio de luzinha que pisca e vira um circo",
        preco: 1500.00,
        qtdEstoque: 5
    },
    {
        id: 4321,
        descricao: "Mouse que acende luzinha e fica outro circo",
        preco: 58.00,
        qtdEstoque: 20
    }
];

// criei uma variável chamada API que vai inicializar o express
const api = express();
api.use(cors());

// aqui, através da variável API eu começo a definir as minhas "rotas" (URLs)
api.get("/produtos", (req, res) => {
    console.log("Acessei a function correspondente ao método GET");


    res.status(200);
    res.json(listaProdutos);
});

api.get("/produtos/:id" , (req, res) => {
    let idProduto = req.params["id"];
    console.log("a URL tem o parametro "+idProduto);
    let produto;
    for (i=0; i< listaProdutos.length; i++){
        if (idProduto == listaProdutos[i].id){
            produto = listaProdutos[i];
            break;
        }
    }

    if (produto){
        res.status(200);
        res.json(produto);
    }
    else{
        res.status(404);
        res.send("Not found");
    }
    
})

api.post("/produtos", (req, res) => {
    console.log("Acessei a function correspondente ao método POST")
});

api.put("/produtos", (req, res) => {
    console.log("Acessei a function correspondente ao método PUT")
});

api.delete("/produtos", (req, res) => {
    console.log("Acessei a function correspondente ao método DELETE")
})


// colocar o express no ar
api.listen(port, () => {
    console.log("API no ar, atendendo na porta " + port);
})