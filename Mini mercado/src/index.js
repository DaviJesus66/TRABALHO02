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
app.use('/produtos', ProdutosController);

const CategoriasController = require('./controllers/CategoriasController');
app.use('/categorias', CategoriasController);

const FornecedoresController = require('./controllers/FornecedoresController');
app.use('/fornecedores', FornecedoresController);

const ClientesController = require('./controllers/ClientesController');
app.use('/clientes', ClientesController);

const FuncionariosController = require('./controllers/FuncionariosController');
app.use('/funcionarios', FuncionariosController);

const PedidosController = require('./controllers/PedidosController');
app.use('/pedidos', PedidosController);

const ItensPedidosController = require('./controllers/ItensPedidosController');
app.use('/itens-pedidos', ItensPedidosController);

const VendasController = require('./controllers/VendasController');
app.use('/vendas', VendasController);

const PagamentosController = require('./controllers/PagamentosController');
app.use('/pagamentos', PagamentosController);

const EstoqueController = require('./controllers/EstoqueController');
app.use('/estoque', EstoqueController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API-MINI-MERCADO Rodando em http://localhost:${PORT}`);
});
