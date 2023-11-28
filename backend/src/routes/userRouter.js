// Importar o modulo de Router do express
const { Router } = require('express');
// Instanciar o Router na variável router
const router = Router();

// Importar as funções (processamento da requisição) do controller
const { 
    listUsers,
    storeUser,
    updateUser,
    deleteUser,
} = require('../controllers/userController')

// Criar os endpoints (rotas) que serão acessados a partir dos métodos HTTP (get,post,put,delete)
router.get('/users', listUsers);
router.post('/user/create', storeUser);
router.put('/user/:id_usuario', updateUser);
router.delete('/user/delete/:id_usuario', deleteUser);

module.exports = router;