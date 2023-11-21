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
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO publicacao_empresa(id_usuarioEmpresa,nome, img, somos_descricao, fazemos_descricao, valores, projeto_titulo, projeto_descricao) VALUES(?,?, ?, ?, ?, ?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_usuarioEmpresa,
        request.body.nome,
        request.file.filename, 
        request.body.somos_descricao,
        request.body.fazemos_descricao,
        request.body.valores,
        request.body.projeto_titulo,
        request.body.projeto_descricao
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

async function getPubliInformations(request, response) {
    const publiId = request.params.id_publiEmpresa;
    
    const query = ` SELECT publicacao_empresa.id_publiEmpresa AS id_publiEmpresa, publicacao_empresa.id_usuarioEmpresa AS id_usuarioEmpresa, publicacao_empresa.nome AS nome, publicacao_empresa.img AS img, publicacao_empresa.somos_descricao AS somos_descricao, publicacao_empresa.fazemos_descricao AS fazemos_descricao, publicacao_empresa.valores AS valores, publicacao_empresa.projeto_titulo AS projeto_titulo, publicacao_empresa.projeto_descricao AS projeto_descricao FROM publicacao_empresa JOIN usuarios ON publicacao_empresa.id_usuarioEmpresa = usuarios.id_usuario
    WHERE
      id_publiEmpresa = ?
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

// Função que retorna as imagens da publicação empresa no banco de dados
async function getImgPubliCompany(request, response) {

  const params = Array(
    request.params.id_publiEmpresa,
  )
  console.log(request)
  // Preparar o comando de execução no banco
  connection.query('SELECT img FROM publicacao_empresa WHERE id_publiEmpresa = ?', [params], (err, results) => { 
    
      try {  // Tenta retornar as solicitações requisitadas
          if (results) {  // Se tiver conteúdo 
              response.status(200).json({
                  success: true,
                  message: 'Retorno da imagem da publicação empresa com sucesso!',
                  data: results
              });
          } else {  // Retorno com informações de erros
              response
                  .status(400)
                  .json({
                      success: false,
                      message: `Não foi possível retornar a imagem da publicação empresa.`,
                      query: err.sql,
                      sqlMessage: err.sqlMessage
                  });
          }
      } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
          response.status(400).json({
              succes: false,
              message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
              query: err.sql,
              sqlMessage: err.sqlMessage
          })
      }   
  });
}

// EMPRESA PROJETOS

// Função para listar as informações de competência técnica
async function listEmpresaProjetos(request, response) {
  try {
      const query = 'SELECT * FROM empresa_projetos';
      connection.query(query, (err, results) => {
          if (err) {
              response.status(500).json({
                  success: false,
                  message: 'Erro ao listar as publicações.',
                  error: err
              });
          } else {
              response.status(200).json({
                  success: true,
                  data: results
              });
          }
      });
  } catch (err) {
      response.status(500).json({
          success: false,
          message: 'Erro ao listar as publicações.',
          error: err
      });
  }
}

// Função que cria nova competencia Tecnica 
async function storeEmpresaProjetos(request, response) {
  console.log(request)
  // Preparar o comando de execução no banco
  const query = 'INSERT INTO empresa_projetos(id_empresaProjeto, projeto_titulo, projeto_descricao) VALUES(?, ?, ?);';

  // Recuperar os dados enviados na requisição
  const params = Array(
      request.body.id_empresaProjeto,
      request.body.projeto_titulo,
      request.body.projeto_descricao
  );


  // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
  connection.query(query, params, (err, results) => {
      try {
        console.log("resultado ok:", results )
          if (results) {
              response
                  .status(201)
                  .json({
                      success: true,
                      message: `Sucesso! Competencia cadastrada.`,
                      data: results
                  });
          } else {
              response
                  .status(400)
                  .json({
                      success: false,
                      message: `Não foi possível realizar o cadastro. Verifique os dados informados`,
                      query: err.sql,
                      sqlMessage: err.sqlMessage
                  });
          }
      } catch (e) { // Caso aconteça algum erro na execução
          response.status(400).json({
                  succes: false,
                  message: "Ocorreu um erro. Não foi possível cadastrar competencia!",
                  query: err.sql,
                  sqlMessage: err.sqlMessage
              });
      }
  });
}


module.exports = {
    storeCompany,
    getPubliInformations,
    getImgPubliCompany,

    storeEmpresaProjetos,
    listEmpresaProjetos
}