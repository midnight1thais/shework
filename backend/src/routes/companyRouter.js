// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const {
    listCompany,
    listAllCompany,
    storeCompany,
    getPubliInformations,
    getImgPubliCompany,

    storeEmpresaProjetos
} = require('../controllers/companyController')

const upload = require('../config/multer')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.get('/listAll', listAllCompany);
router.get('/list/:id_publiEmpresa', listCompany);
router.post('/create', upload.single('file'), storeCompany);
router.get('/informations/:id_publiEmpresa', getPubliInformations);
router.get('/information/img_company/:id_publiEmpresa', getImgPubliCompany);

router.get('/projects', storeEmpresaProjetos);

module.exports = router;