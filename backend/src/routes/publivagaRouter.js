// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    // da publicação pessoa
    listCompanyVaga,
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
} = require('../controllers/publivagaController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)

// Da vaga
router.get('/publiCompanyVaga/:id_empresa_vaga', listCompanyVaga);
router.get('/publiVagaList/:id_publicacao_vaga', listVaga);
router.post('/create', storeVaga);

//Da progressao
router.get('/listProgressao/:id_publicacao_vaga', listProgressao);
router.post('/progressao/create', storeProgressao);

//Dos requisitos obrigatórios
router.get('/listRequisitosOB/:id_publicacao_vaga', listRequisitosOB);
router.post('/requisitosOB/create', storeRequisitosOB);

//Dos requisitos desejaveis
router.get('/listRequisitosDJ/:id_publicacao_vaga', listRequisitosDJ);
router.post('/requisitosDJ/create', storeRequisitosDJ);

//Das responsabilidades
router.get('/listResponsabilidades/:id_publicacao_vaga', listResponsabilidades);
router.post('/responsabilidades/create', storeResponsabilidades);

//Dos projetos
router.get('/listProjetos/:id_publicacao_vaga', listProjetos);
router.post('/projetos/create', storeProjetos);

module.exports = router;