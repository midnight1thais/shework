// Módulo de configuração da webapi, módulo de aplicação

// Importar o pacote express (servidor)
const express = require('express');
// Responsável por lidar com requisições externas
const cors = require('cors');
// Importar as rotas para serem executadas na aplicação
const userRouter = require('./routes/userRouter');
const loginRouter = require('./routes/loginRouter');
const publipersonRouter = require('./routes/publipersonRouter'); 
const companyRouter = require('./routes/companyRouter');
const publivagaRouter = require('./routes/publivagaRouter');

// Importar o pacote dotenv, gerenciador de variáveis de ambiente
const dotenv = require('dotenv').config();

// Instanciar o express na variável app
const app = express();

// Habilitar o recebimento de requests em formato JSON
app.use(express.json());
// Habilitar o recebimento de requests em formato JSON
app.use(cors())
// Habilitar as rotas na aplicação
app.use('/api', userRouter);
app.use('/api/auth', loginRouter);
app.use('/api', publipersonRouter);
app.use('/api/company', companyRouter);
app.use('/api/publivaga', publivagaRouter);
// Setar a porta do servidor, a parir do arquivo .env
app.set('port', process.env.PORT || 1903);

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Torna a pasta public "visível" atrávez da URL, para assim mostrar as imagens
app.use('/uploads', express.static(__dirname + '\\public'));

module.exports = app;