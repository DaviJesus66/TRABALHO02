Mini Mercado API

API RESTful desenvolvida em Node.js, Express e MongoDB para gerenciamento completo de um mini mercado, incluindo produtos, categorias, fornecedores, clientes, funcionários, pedidos, vendas, pagamentos e estoque.

Tecnologias Utilizadas

Node.js

Express.js

MongoDB Atlas

Mongoose

Yup

dotenv

Nodemon

Documentação e testes

Sobre o Sistema

A API centraliza e automatiza o gerenciamento de um mini mercado, permitindo controle completo de produtos, estoque, clientes, vendas e muito mais.

Funcionalidades Principais

CRUD completo de:

Produtos

Categorias

Clientes

Funcionários

Fornecedores

Pedidos e Itens

Vendas

Pagamentos

Controle de estoque

Cada módulo possui validação com Yup, modelagem com Mongoose e está estruturado em Models / Controllers / Routes.

Finalidade da API

A API funciona como um back-end completo, permitindo:

Registro e gerenciamento de produtos, categorias e fornecedores

Controle de clientes e funcionários

Registro de vendas e pedidos

Atualização automática de estoque

Registro de pagamentos

Problema Resolvido

Ela substitui planilhas e controles manuais, oferecendo:

Centralização de dados

Redução de erros humanos

Validações consistentes

Melhor organização de estoque e vendas

Base pronta para expansão (PDV, relatórios, dashboards etc.)

Funcionalidades Implementadas
CRUD completo de:

Empresas

Departamentos

Funcionários

Tarefas

Relacionamentos:

Empresa → Departamentos

Departamento → Funcionários

Funcionário → Tarefas

Outros recursos:

Validação com Yup

Conexão com MongoDB Atlas

Documentação no Postman

Versionamento com Git/GitHub

Exemplos de Requisição
GET /produtos

Resposta:

[
  {
    "id": "674b9ea27a",
    "nome": "Arroz",
    "preco": 12.50,
    "categoria": "674b9cc98",
    "quantidade": 20
  }
]

POST /produtos
{
  "nome": "Feijão",
  "preco": 8.90,
  "categoria": "674b9cc98",
  "quantidade": 50
}


Resposta:

{
  "message": "Produto criado com sucesso!"
}

Collections e Relacionamentos
produtos

nome (String)

preco (Number)

categoria (ObjectId → categorias)

quantidade (Number)

fornecedor (ObjectId → fornecedores)

categorias

nome (String)

clientes

nome

cpf

telefone

funcionarios

nome

cargo

cpf

fornecedores

nome

cnpj

telefone

pedidos

cliente (ObjectId)

data

total

itensPedido

produto (ObjectId)

quantidade

precoUnitario

pedido (ObjectId)

vendas

cliente

funcionario

data

total

pagamentos

venda (ObjectId)

valor

tipo

data

Diagrama de Modelagem

Instalação, Configuração e Execução
Requisitos

Node.js

MongoDB Atlas

NPM ou Yarn

Clonar o projeto
git clone <url-do-repositorio>
cd mini-mercado-api

Instalar Dependências
npm install

Arquivo .env

Crie na raiz:

DB_HOST=cluster0.hgjgzrq.mongodb.net
DB_USER=Davvisj
DB_PASS=43sJJnGw3Ub7UqPs
DB_NAME=Mini-mercado


Nunca suba credenciais reais no GitHub.

Inicializar o projeto
Produção:
npm start

Desenvolvimento:
npm run dev

Arquivo Principal

src/index.js

Configura o Express

Conecta ao MongoDB Atlas

Carrega rotas

Inicia a API

Integrantes
Nome	Matrícula	GitHub
Gabriel Araújo da Silva	24214290041	@gabrielaraujo8671-jpg
Davi Souza De Jesus	24214290011	@DaviJeus66
Alyson Fábio Dos Santos Viana	24214290012	@Alysonviana
Contribuição de Cada Membro
Davi — Backend & Banco de Dados

Estrutura base do projeto

Configuração do Atlas

Criação do .env.example

Models iniciais (Produto, Categoria, Cliente)

3 CRUDs completos

Conexão Mongoose

Criou a primeira branch

Gabriel — Validações & Documentação

Validações com Yup e Mongoose

CRUDs (Clientes, Funcionários, Pedidos)

Collection completa no Postman

Criou o README.md

Ajustou documentação das rotas

Alyson — Gerente & Modelagem

Diagrama completo do banco

CRUDs (Vendas, ItensVenda, Estoque, Pagamentos)

Controle das issues

Atribuição de tarefas

Validação dos relacionamentos

