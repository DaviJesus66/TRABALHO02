const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    cpf: { type: String, required: true, unique: true },
    telefone: { type: String },
    endereco: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cliente', ClienteSchema);
