// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    // da publicação pessoa
    listPerson,
    storePerson,
    updatePerson,
    deletePerson,

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
    storeCursos
} = require('../controllers/publipersonController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)

// Da pessoa
router.get('/publiperson/:id_user', listPerson);
router.post('/publiperson/create', storePerson);
// router.put('/publiperson/:id_publiPessoa', updatePerson);
// router.delete('/publiperson/:id', deletePerson);

// Das competencias técnicas
router.get('/competenciaTec/:id_user', listCompetenciaTec);
router.post('/competenciaTec/create', storeCompetenciaTec);

// Das experiencias
router.get('/experiencias/:id_user', listExperiencias);
router.post('/experiencias/create', storeExperiencias);

// Das linguas
router.get('/linguas/:id_user', listLinguas);
router.post('/linguas/create', storeLinguas);

// Das certificados
router.get('/certificados/:id_user', listCertificados);
router.post('/certificados/create', storeCertificados);

// Dos cursos
router.get('/cursos/:id_user', listCursos);
router.post('/cursos/create', storeCursos);


module.exports = router;