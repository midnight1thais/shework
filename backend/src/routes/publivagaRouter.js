// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    // da publicação pessoa
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

// Da pessoa
router.get('/publiVagaList/:id_user', listVaga);
router.post('/create', storeVaga);

//Da progressao
router.get('/listProgressao/:id_user', listProgressao);
router.post('/progressao/create', storeProgressao);

//Dos requisitos obrigatórios
router.get('/listRequisitosOB/:id_user', listRequisitosOB);
router.post('/requisitosOB/create', storeRequisitosOB);

//Dos requisitos desejaveis
router.get('/listRequisitosDJ/:id_user', listRequisitosDJ);
router.post('/requisitosDJ/create', storeRequisitosDJ);

//Das responsabilidades
router.get('/listResponsabilidades/:id_user', listResponsabilidades);
router.post('/responsabilidades/create', storeResponsabilidades);

//Dos projetos
// router.get('/listProjetos/:id_publicacao_vaga', listProjetos);
router.post('/projetos/create', storeProjetos);

module.exports = router;