const mongoose = require('mongoose');

const categoriaSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    tipo: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Categoria', categoriaSchema);