// preciso "importar" o sequelize pra eu poder fazer a conexão com o banco
const Sequelize = require('sequelize');

// agora preciso criar meu objeto de conexão, parametrizando-o corretamente
const dbConn = new Sequelize('ecommerce_xp40','root','mysql', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = dbConn;


/* 
    o objeto dbConn instancia um objeto Sequelize que pede os seguintes parametros
    nome_base,
    usuario,
    senha,
    parâmetros: nome do servidor
                porta
                dialeto
                algumas definicioes
*/