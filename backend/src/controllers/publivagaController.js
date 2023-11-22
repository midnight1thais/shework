// Importe o módulo de conexão com o banco de dados
const connection = require('../config/db');

// Função para listar as informações das publicações das pessoas
async function listVaga(request, response) {
    try {
        // precisa modificar para ser o id da empresa
        const id_user = request.params.id_user;

        const query = 'SELECT * FROM publicacao_pessoa WHERE id_publicacao_pessoa = ?;';
        connection.query(query, [id_user], (err, results) => {
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

// Função que cria um novo usuário 
async function storeVaga(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO publicacao_vaga(id_empresa_vaga, tipo_vaga, dt_anuncio, cidade_estado, media_salarial, nivel_conhecimento, area_atuacao) VALUES(?, ?, ?, ?, ?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_empresa_vaga,
        request.body.tipo_vaga,
        request.body.dt_anuncio,
        request.body.cidade_estado,
        request.body.media_salarial,
        request.body.nivel_conhecimento,
        request.body.area_atuacao
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Publicação cadastrada.`,
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
                    message: "Ocorreu um erro. Não foi possível cadastrar a publicação!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// VAGA PROGRESSAO

// Função para listar as informações das possíveis progressoes das vagas
async function listProgressao(request, response) {
    try {
        const id_publicacao_vaga = request.params.id_publicacao_vaga;

        const query = 'SELECT * FROM vaga_progressao WHERE id_publicacao_vaga = ?;';
        connection.query(query,[id_publicacao_vaga], (err, results) => {
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

// Função que cria nova possivel progressao
async function storeProgressao(request, response) {

    // Preparar o comando de execução no banco
    const query = 'INSERT INTO vaga_progressao(id_publicacao_vaga, descricao) VALUES(?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_publicacao_vaga,
        request.body.descricao
    );
    
    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Experiencia cadastrada.`,
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
                    message: "Ocorreu um erro. Não foi possível cadastrar experiencia!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// VAGA REQUISITOS OBRIGATÓRIOS

// Função para listar as informações das possíveis progressoes das vagas
async function listRequisitosOB(request, response) {
    try {
        const id_publicacao_vaga = request.params.id_publicacao_vaga;

        const query = 'SELECT * FROM vaga_requisitos_obrigatorios WHERE id_publicacao_vaga = ?;';
        connection.query(query,[id_publicacao_vaga], (err, results) => {
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

// Função que cria nova possivel RequisitosOB
async function storeRequisitosOB(request, response) {

    // Preparar o comando de execução no banco
    const query = 'INSERT INTO vaga_requisitos_obrigatorios(id_publicacao_vaga, descricao) VALUES(?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_publicacao_vaga,
        request.body.descricao
    );
    
    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Experiencia cadastrada.`,
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
                    message: "Ocorreu um erro. Não foi possível cadastrar experiencia!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// VAGA REQUISITOS DESEJAVEIS

// Função para listar as informações das possíveis progressoes das vagas
async function listRequisitosDJ(request, response) {
    try {
        const id_publicacao_vaga = request.params.id_publicacao_vaga;

        const query = 'SELECT * FROM vaga_requisitos_desejaveis WHERE id_publicacao_vaga = ?;';
        connection.query(query,[id_publicacao_vaga], (err, results) => {
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

// Função que cria nova possivel RequisitosOB
async function storeRequisitosDJ(request, response) {

    // Preparar o comando de execução no banco
    const query = 'INSERT INTO vaga_requisitos_desejaveis(id_publicacao_vaga, descricao) VALUES(?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_publicacao_vaga,
        request.body.descricao
    );
    
    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Experiencia cadastrada.`,
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
                    message: "Ocorreu um erro. Não foi possível cadastrar experiencia!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// VAGA RESPONSABILIDADES

// Função para listar as informações das possíveis responsabilidades
async function listResponsabilidades(request, response) {
    try {
        const id_publicacao_vaga = request.params.id_publicacao_vaga;

        const query = 'SELECT * FROM vaga_responsabilidades WHERE id_publicacao_vaga = ?;';
        connection.query(query,[id_publicacao_vaga], (err, results) => {
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

// Função que cria nova possivel RequisitosOB
async function storeResponsabilidades(request, response) {

    // Preparar o comando de execução no banco
    const query = 'INSERT INTO vaga_responsabilidades(id_publicacao_vaga, descricao) VALUES(?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_publicacao_vaga,
        request.body.descricao
    );
    
    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Experiencia cadastrada.`,
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
                    message: "Ocorreu um erro. Não foi possível cadastrar experiencia!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// VAGA PROJETOS

// Função para listar as informações das possíveis responsabilidades
async function listProjetos(request, response) {
    try {
        const id_publicacao_vaga = request.params.id_publicacao_vaga;

        const query = 'SELECT * FROM vaga_projetos WHERE id_publicacao_vaga = ?;';
        connection.query(query,[id_publicacao_vaga], (err, results) => {
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

// Função que cria nova possivel RequisitosOB
async function storeProjetos(request, response) {

    // Preparar o comando de execução no banco
    const query = 'INSERT INTO vaga_projetos(id_publicacao_vaga, projeto_link, descricao) VALUES(?,?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_publicacao_vaga,
        request.body.projeto_link,
        request.body.descricao
    );
    
    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Experiencia cadastrada.`,
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
                    message: "Ocorreu um erro. Não foi possível cadastrar experiencia!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}



module.exports = {
    listVaga,
    storeVaga,

    listProgressao,
    storeProgressao,

    listRequisitosOB,
    storeRequisitosOB,

    listRequisitosDJ,
    storeRequisitosDJ,

    listResponsabilidades,
    storeResponsabilidades,

    listProjetos,
    storeProjetos

}