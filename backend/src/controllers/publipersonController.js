// Importe o módulo de conexão com o banco de dados
const connection = require('../config/db');


// Função para listar todas as publicações das pessoas
async function listAllPerson(request, response) {
    try {
        const query = 'SELECT * FROM publicacao_pessoa ';

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

// Função para listar as informações das publicações das pessoas
async function listPerson(request, response) {
    try {
        const id_publicacao_pessoa = request.params.id_publicacao_pessoa;

        const query = 'SELECT * FROM publicacao_pessoa WHERE id_publicacao_pessoa = ?;';
        connection.query(query, [id_publicacao_pessoa], (err, results) => {
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
async function storePerson(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO publicacao_pessoa(id_usuario, nome, dt_nascimento, cidade_estado, email, linkedin, nacionalidade, area_interesse, descricao) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_usuario,
        request.body.nome,
        request.body.dt_nascimento,
        request.body.cidade_estado,
        request.body.email,
        request.body.linkedin,
        request.body.nacionalidade,
        request.body.area_interesse,
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


// COMPETENCIAS TÉCNICAS

// Função para listar as informações de competência técnica
async function listCompetenciaTec(request, response) {
    try { 
        const id_publicacao_pessoa = request.params.id_publicacao_pessoa;

        const query = 'SELECT * FROM pessoa_competencia_tecnica WHERE id_publicacao_pessoa = ?';

        connection.query(query,[id_publicacao_pessoa], (err, results) => {
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
async function storeCompetenciaTec(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO pessoa_competencia_tecnica(id_publicacao_pessoa, nome, nivel_conhecimento) VALUES(?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_publicacao_pessoa,
        request.body.nome,
        request.body.nivel_conhecimento
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
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

// EXPERIENCIAS

// Função para listar as informações das experiencias
async function listExperiencias(request, response) {
    try {
        const id_publicacao_pessoa = request.params.id_publicacao_pessoa;

        const query = 'SELECT * FROM pessoa_experiencia WHERE id_publicacao_pessoa = ?';
        
        connection.query(query, [id_publicacao_pessoa], (err, results) => {
            if (err) {
                response.status(500).json({
                    success: false,
                    message: 'Erro ao listar os certificados.',
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
            message: 'Erro ao listar os certificados.',
            error: err
        });
    }
}

// Função que cria nova experiencia 
async function storeExperiencias(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO pessoa_experiencia(id_publicacao_pessoa, nome, dt_inicio, dt_final, descricao) VALUES(?, ?, ?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_publicacao_pessoa,
        request.body.nome,
        request.body.dt_inicio,
        request.body.dt_final,
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

// LINGUAS

// Função para listar as informações das linguas
async function listLinguas(request, response) {
    try {
        const id_publicacao_pessoa = request.params.id_publicacao_pessoa;

        const query = 'SELECT * FROM pessoa_linguas WHERE id_publicacao_pessoa = ?';

        connection.query(query,[id_publicacao_pessoa], (err, results) => {
            if (err) {
                response.status(500).json({
                    success: false,
                    message: 'Erro ao listar as linguas.',
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
            message: 'Erro ao listar as linguas.',
            error: err
        });
    }
}

// Função que cria nova lingua
async function storeLinguas(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO pessoa_linguas(id_publicacao_pessoa, nome, nivel_conhecimento) VALUES(?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_publicacao_pessoa,
        request.body.nome,
        request.body.nivel_conhecimento
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Lingua cadastrada.`,
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
                    message: "Ocorreu um erro. Não foi possível cadastrar a lingua!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// CERTIFICADOS

// Função para listar as informações dos certificados
async function listCertificados(request, response) {
    try {
        const id_publicacao_pessoa = request.params.id_publicacao_pessoa;

        const query = 'SELECT * FROM pessoa_certificados where id_publicacao_pessoa = ?';
        
        connection.query(query, [id_publicacao_pessoa], (err, results) => {
            if (err) {
                response.status(500).json({
                    success: false,
                    message: 'Erro ao listar os certificados.',
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
            message: 'Erro ao listar os certificados.',
            error: err
        });
    }
}

// Função que cria novo certificado
async function storeCertificados(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO pessoa_certificados(id_publicacao_pessoa, nome, link) VALUES(?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_publicacao_pessoa,
        request.body.nome,
        request.body.link
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            console.log('11:::', err)
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Sucesso! Certificado cadastrada.`,
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
                    message: "Ocorreu um erro. Não foi possível cadastrar o certificado!",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// CURSOS

// Função para listar as informações dos cursos
async function listCursos(request, response) {
    try {
        const id_publicacao_pessoa = request.params.id_publicacao_pessoa;

        const query = 'SELECT * FROM pessoa_curso WHERE id_publicacao_pessoa = ?;';
        connection.query(query,[id_publicacao_pessoa], (err, results) => {
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

// Função que cria nova experiencia 
async function storeCursos(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO pessoa_curso(id_publicacao_pessoa, nome, dt_inicio, dt_final, descricao) VALUES(?, ?, ?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.id_publicacao_pessoa,
        request.body.nome,
        request.body.dt_inicio,
        request.body.dt_final,
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

async function getPerson(request, response) {
    const query = "SELECT * FROM publicacao_pessoa WHERE id_usuario = ?";

    const params = request.params.id_usuario;

    connection.query(query, params, (err, results) => {
        console.log(results)

        if (results.length > 0) {
            response
                .status(200)
                .json({
                    success: true,
                    message: "Usuario tem publicação",
                    data: results
                })
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: "Usuario nao tem publicação",
                })
        }
    })
}

module.exports = {
    listAllPerson,
    getPerson,
    listPerson,

    storePerson,

    listCompetenciaTec,
    storeCompetenciaTec,

    listExperiencias,
    storeExperiencias,

    listLinguas,
    storeLinguas,

    listCertificados,
    storeCertificados,

    listCursos,
    storeCursos

}