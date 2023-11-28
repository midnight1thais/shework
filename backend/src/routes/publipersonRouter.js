// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    // da publicação pessoa
    listAllPerson,
    listPerson,
    storePerson,

    // das competencias tecnicas
    listCompetenciaTec,
    storeCompetenciaTec,

    // das experiencias 
    listExperiencias,
    storeExperiencias,

    // das linguas
    listLinguas,
    storeLinguas,

    // das linguas
    listCertificados,
    storeCertificados,

    listCursos,
    storeCursos,
    getPerson
} = require('../controllers/publipersonController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)

// Da pessoa
router.get('/publiperson/list', listAllPerson);
router.get('/publipersonGet/:id_usuario', getPerson);
router.get('/publiperson/:id_publicacao_pessoa', listPerson);
router.post('/publiperson/create', storePerson);
// router.put('/publiperson/:id_publiPessoa', updatePerson);

// Das competencias técnicas
router.get('/competenciaTec/:id_publicacao_pessoa', listCompetenciaTec);
router.post('/competenciaTec/create', storeCompetenciaTec);

// Das experiencias
router.get('/experiencias/:id_publicacao_pessoa', listExperiencias);
router.post('/experiencias/create', storeExperiencias);

// Das linguas
router.get('/linguas/:id_publicacao_pessoa', listLinguas);
router.post('/linguas/create', storeLinguas);

// Das certificados
router.get('/certificados/:id_publicacao_pessoa', listCertificados);
router.post('/certificados/create', storeCertificados);

// Dos cursos
router.get('/cursos/:id_publicacao_pessoa', listCursos);
router.post('/cursos/create', storeCursos);


module.exports = router;