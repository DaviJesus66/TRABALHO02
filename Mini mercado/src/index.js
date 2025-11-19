const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Conexão com o banco de dados
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url)
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch(err => {
    console.error("Erro ao conectar no banco MongoDB:", err);
    process.exit(1); // Opcional: encerra o app caso falhe ao conectar
  });

// Rotas
const ProdutosController = require('./controllers/ProdutosController');
app.use(ProdutosController);

const CategoriasController = require('./controllers/CategoriasController');
app.use(CategoriasController);

const FornecedoresController = require('./controllers/FornecedoresController');
app.use(FornecedoresController);

const ClientesController = require('./controllers/ClientesController');
app.use(ClientesController);

const FuncionariosController = require('./controllers/FuncionariosController');
app.use(FuncionariosController);

const PedidosController = require('./controllers/PedidosController');
app.use(PedidosController);

const ItensPedidosController = require('./controllers/ItensPedidoController');
app.use(ItensPedidosController);

const VendasController = require('./controllers/VendasController');
app.use(VendasController);

const PagamentosController = require('./controllers/PagamentosController');
app.use(PagamentosController);

const EstoqueController = require('./controllers/EstoqueController');
app.use(EstoqueController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API-MINI-MERCADO Rodando em http://localhost:${PORT}`);
});
