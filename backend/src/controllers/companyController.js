// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

var fs = require('fs');

// Função que rcebe dois argumentos: base64str, que é uma string em formato base64 a ser decodificada, e fileName, que é o nome do arquivo onde a decodificação será salva.
function base64_decode(base64str, fileName){
  var bitmap = Buffer.from(base64str, 'base64');

  // O conteúdo decodificado é escrito no arquivo especificado por fileName.
  fs.writeFileSync(fileName+'',bitmap, 'binary', function (err){
    if(err){
      console.log('Conversion error');
    }
  } );
}

// Função que cria um novo usuário 
async function storeCompany(request, response) {
    console.log(request.body)
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO publicacao_empresa(id_usuarioEmpresa,nome, img, somos_descricao, fazemos_descricao, valores) VALUES(?,?, ?, ?, ?, ?);';

    console.log('ffffffffffffffaaaa', request.file)

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_usuarioEmpresa,
        request.body.nome,
        request.file.filename, 
        request.body.somos_descricao,
        request.body.fazemos_descricao,
        request.body.valores
              
    );
    console.log('ffffffffffffff', params)

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

async function getPubliInformations(request, response) {
    const publiId = request.params.id_publiEmpresa;
    
    const query = `
    
    SELECT
      publicacao_empresa.id_publiEmpresa AS id_publiEmpresa,
      publicacao_empresa.id_usuarioEmpresa AS id_usuarioEmpresa,
      publicacao_empresa.nome AS nome,
      publicacao_empresa.img AS img,
      publicacao_empresa.somos_descricao AS somos_descricao,
      publicacao_empresa.fazemos_descricao AS fazemos_descricao,
      publicacao_empresa.valores AS valores,
    FROM
      publicacao_empresa
    JOIN
      usuarios ON publicacao_empresa.id_usuarioEmpresa = usuarios.id_usuario
    WHERE
      publicacao_empresa.id_publiEmpresa = ?
    `;
  
    connection.query(query, [publiId], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar as informações da publicação: ' + error.message);
        return response.status(500).json({ error: 'Erro ao recuperar as informações da publicação' });
      }

      results.forEach((publi) => {
        if (publi.img) {
          const base64Data = publi.img;
          // Define o nome do arquivo.
          const publiImg = `publi_${publi.id_publiEmpresa}.jpeg`; 
          base64_decode(base64Data, publiImg);
        }
      });
  
      response.json(results);
    });
  }



module.exports = {
    storeCompany,
    getPubliInformations
}