const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    descricao: { type: String, required: true, trim: true },
    valor: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Produto', ProdutoSchema);
