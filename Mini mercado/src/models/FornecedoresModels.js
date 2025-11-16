const mongoose = require('mongoose');

const FornecedorSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    cnpj: { type: String, required: true }, // Alterado para string por boas práticas
  },
  { timestamps: true }
);

module.exports = mongoose.model('Fornecedor', FornecedorSchema);
