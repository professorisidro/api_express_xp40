const Sequelize = require('sequelize')
const dbConn = require('./conexaobd')

// aqui não vem a criação de uma variável (estrutura/classe) do tipo produto,
// e sim o mapeamento tanto do nome da tabela para a estrutura quanto do nome das colunas
// da tabela para os atributos desta classe

/*
const Produto = {
    codigo: {
        
    },
    nome : "computador",
    descricao:"computador que acende luzinha",
    preco: 1500.00,
    estoque: 3,
    linkFoto: "computador.jpg"
}
*/

const Produto = dbConn.define('produto',{
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'codigo'
    },
    nome: {
        type: Sequelize.STRING(45),
        field: 'nome'        
    },
    descricao: {
        type: Sequelize.TEXT,
        field: 'descricao'
    },
    preco: {
        type: Sequelize.DOUBLE,
        field: 'preco'
    },
    estoque: {
        type: Sequelize.INTEGER,
        field: 'estoque'
    },
    linkFoto: {
        type: Sequelize.STRING(255),
        field: 'link_foto'
    }
},{
    freezeTableName: true
});

module.exports = Produto;