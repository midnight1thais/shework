// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    storeCompany
} = require('../controllers/companyController')

const upload = require('../config/multer')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.post('/create', upload.single('file'), storeCompany);

module.exports = router;