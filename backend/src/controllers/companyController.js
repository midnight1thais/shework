// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

// Função que cria um novo usuário 
async function storeCompany(request, response) {
    console.log(request.body)
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO publicacao_empresa(id_usuarioEmpresa,nome, somos_descricao, fazemos_descricao, valores) VALUES(?,?, ?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_usuarioEmpresa,
        request.body.nome,
        request.body.somos_descricao,
        request.body.fazemos_descricao,
        request.body.valores
              
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Empresa Publicada.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível realizar a publicação. Verifique os dados informados`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "Ocorreu um erro. Não foi possível publicar a empresa!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}



module.exports = {
    storeCompany,
}