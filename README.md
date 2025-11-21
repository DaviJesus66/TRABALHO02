API Empresas — Documentação Oficial

Esta documentação descreve toda a estrutura, funcionamento e padrões utilizados na API Empresas (Node.js + Express + MongoDB + Mongoose + Yup) desenvolvida ao longo do projeto.

📌 Visão Geral do Projeto

A API Empresas é uma aplicação REST completa que implementa operações CRUD, relacionamentos entre collections e validações de dados utilizando Yup. O projeto segue uma arquitetura organizada em Models, Controllers e Routes, além de utilizar conexão com banco MongoDB Atlas.

Objetivos principais:

Implementação de CRUD completo

Relacionamentos entre entidades

Validação de dados com Yup

Documentação técnica no Postman

Versionamento com Git

Estrutura limpa e escalável

📁 Estrutura do Projeto
src/
│  index.js
│
├─ controllers/
│   ├─ EmpresaController.js
│   ├─ DepartamentoController.js
│   ├─ TarefaController.js
│   └─ FuncionarioController.js
│
├─ models/
│   ├─ EmpresaModel.js
│   ├─ DepartamentoModel.js
│   ├─ TarefaModel.js
│   └─ FuncionarioModel.js
│
├─ routes/
│   ├─ empresaRoutes.js
│   ├─ departamentoRoutes.js
│   ├─ tarefaRoutes.js
│   └─ funcionarioRoutes.js
│
└─ database/
    └─ connection.js
⚙️ Tecnologias Utilizadas

Node.js

Express.js

MongoDB Atlas

Mongoose

Yup para validação

dotenv

Nodemon (desenvolvimento)

🌐 Configuração do Servidor

Exemplo resumido do arquivo index.js:

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


const app = express();
app.use(express.json());


// Conexão com banco
mongoose.connect(process.env.DB_HOST)
  .then(() => console.log('MongoDB conectado!'))
  .catch(err => console.log('Erro ao conectar:', err));


// Rotas
const empresaRoutes = require('./routes/empresaRoutes');
app.use('/empresas', empresaRoutes);


app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
🧩 Endpoints (Resumo Geral)

A documentação detalhada será feita no Postman, mas aqui está um resumo geral:

🔹 Empresas

GET /empresas – Listar todas

POST /empresas – Criar nova

GET /empresas/:id – Buscar por ID

PUT /empresas/:id – Atualizar

DELETE /empresas/:id – Remover

🔹 Departamentos

GET /departamentos

POST /departamentos

GET /departamentos/:id

PUT /departamentos/:id

DELETE /departamentos/:id

Relacionado com Empresa

🔹 Funcionários

GET /funcionarios

POST /funcionarios

GET /funcionarios/:id

PUT /funcionarios/:id

DELETE /funcionarios/:id

Relacionado com Departamento

🔹 Tarefas

GET /tarefas

POST /tarefas

GET /tarefas/:id

PUT /tarefas/:id

DELETE /tarefas/:id

Relacionado com Funcionário

✔️ Validações com Yup

Todas as entidades possuem validações obrigatórias, por exemplo:

const schema = Yup.object().shape({
  nome: Yup.string().required(),
  email: Yup.string().email(),
  ativo: Yup.boolean().default(true)
});

As validações são aplicadas nos Controllers antes da gravação no banco.

🔗 Relacionamentos

Os principais relacionamentos são:

Empresa → Departamentos

Departamento → Funcionários

Funcionário → Tarefas

Exemplo de relacionamento no Model:

empresa: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Empresa'
}
📘 Documentação no Postman

A documentação inclui:

Descrição de cada rota

Corpo esperado das requisições

Exemplos de resposta

Códigos de erro

Coleção exportada

▶️ Como Rodar o Projeto
git clone <repositorio>
cd api-empresas
npm install
npm start

Necessário criar arquivo .env:

DB_HOST=
DB_USER=
DB_PASS=
DB_NAME=
🤝 Contribuição

a) Criar branch b) Commitar alterações c) Realizar Pull Request

📄 Licença

Projeto acadêmico — uso livre para estudo.

[def]: imagem.jpg