# Mini Mercado API

API RESTful desenvolvida em Node.js, Express e MongoDB que gerencia todas as operações de um mini mercado, incluindo produtos, categorias, fornecedores, clientes, funcionários, pedidos, vendas, pagamentos e estoque.

---

## Tecnologias Utilizadas

Node.js
Express.js
MongoDB Atlas
Mongoose
Yup
dotenv
Nodemon 
documentação e testes

## Sobre o Sistema

A API tem como objetivo centralizar e automatizar o gerenciamento de um mini mercado, permitindo o controle completo de produtos, clientes, vendas, pagamentos e operações internas.

### Funcionalidades Principais (O sistema permite:)
Cadastro, consulta, edição e exclusão de:
Produtos
Categorias
Clientes
Funcionários
Fornecedores
Pedidos e itens
Vendas
Pagamentos
Controle de estoque
Cada módulo possui CRUD completo, validações com Yup e integração com o MongoDB via Mongoose.
## Finalidade da API
A API funciona como um back-end completo para uso em aplicações web, desktop ou mobile, possibilitando:
Registro e gerenciamento de produtos, categorias e fornecedores  
Controle de clientes e funcionários  
Registro de vendas e pedidos  
Atualização automática de estoque  
Registro de pagamentos  
## Problema Resolvido
O sistema substitui planilhas e controles manuais, fornecendo:
Centralização dos dados  
Redução de erros humanos  
Validações consistentes  
Organização de estoque e vendas  
Base robusta para futura expansão (PDV, dashboards, relatórios etc.)
## Funcionalidades Implementadas
# CRUD completo de:
  - Empresas  
  - Departamentos  
  - Funcionários  
  - Tarefas  
- Relacionamentos:
  - Empresa → Departamentos
  - Departamento → Funcionários
  - Funcionário → Tarefas
- Validação de dados com Yup  
- Estrutura padronizada em **Models / Controllers / Routes**
- Conexão com MongoDB Atlas via Mongoose
- Documentação no Postman
- Versionamento com Git/GitHub
#### Resposta:
```json
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
json
Copiar código
{
  "nome": "Feijão",
  "preco": 8.90,
  "categoria": "674b9cc98",
  "quantidade": 50
}
Resposta:
json
Copiar código
{
  "message": "Produto criado com sucesso!"
}
PUT /produtos/:id
Atualiza um produto.

DELETE /produtos/:id
Remove um produto.

# Collections e Relacionamentos
produtos
nome (String)
preco (Number)
categoria (ObjectId → categorias)
quantidade (Number)
fornecedor (ObjectId → fornecedores)
Um produto pertence a uma categoria e a um fornecedor.
categorias
nome (String)
Uma categoria possui vários produtos.
clientes
nome
cpf
telefone
Um cliente possui vários pedidos e vendas.
funcionarios
nome
cargo
cpf
Funcionário pode registrar vendas.
fornecedores
nome
cnpj
telefone
Fornece vários produtos.
pedidos
cliente (ObjectId)
data
total
Um pedido contém vários itens.
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
# Diagrama de Modelagem: 
![Diagrama do Banco](./Mini%20mercado/docs/diagrama.png)

Instalação, Configuração e Execução
Requisitos
Node.js
MongoDB Atlas
NPM ou Yarn
Clonar o projeto
bash
Copiar código
git clone <url-do-repositorio>
cd mini-mercado-api
Instalar Dependências
bash
Copiar código
npm install
Arquivo .env
Crie na raiz:
ini
Copiar código
DB_HOST=cluster0.hgjgzrq.mongodb.net
DB_USER=Davvisj
DB_PASS=43sJJnGw3Ub7UqPs
DB_NAME=Mini-mercado
⚠ Nunca subir credenciais reais no GitHub.
▶ Inicializar o projeto
Produção:
bash
Copiar código
npm start
Desenvolvimento:
bash
Copiar código
npm run dev
Arquivo principal
bash
Copiar código
src/index.js
Configura o Express
Conecta ao MongoDB Atlas
Carrega rotas
Inicia a API
Comunicação com o Banco de Dados
A API usa MongoDB Atlas, conectando-se através do Mongoose com as credenciais definidas no arquivo .env.
Integrantes
Nome Completo	Matrícula	GitHub
Gabriel Araújo da Silva	24214290041	@gabrielaraujo8671-jpg
Davi Souza De Jesus	24214290011	@DaviJeus66
Alyson Fábio Dos Santos Viana	24214290012	@Alysonviana
Contribuição de Cada Membro
Davi — Backend & Banco de Dados
Criou a estrutura base do projeto
Configurou o MongoDB Atlas
Criou o .env.example
Models iniciais (Produto, Categoria, Cliente)
Implementou 3 CRUDs completos
Conectou Mongoose ao Atlas
Criou a primeira branch e subiu o projeto
Gabriel — Validações & Documentação
Implementou validações com Yup e Mongoose
Desenvolveu 3 CRUDs adicionais (Clientes, Funcionários, Pedidos)
Criou a collection completa no Postman
Criou todo o README.md
Ajustou documentação das rotas
Organizou exemplos de requests e responses
Alyson — Gerente & Modelagem
Criou o diagrama completo do banco com 10 entidades
Desenvolveu 4 CRUDs (Vendas, ItensVenda, Estoque, Pagamentos)
Criou e gerenciou issues no GitHub
Atribuiu tarefas e acompanhou commits
Validou relacionamentos das collections