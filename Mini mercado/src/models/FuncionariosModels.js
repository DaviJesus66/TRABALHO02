const mongoose = require('mongoose');

const FuncionarioSchema = new mongoose.Schema(
  {
    nome: { type: String, required: true, trim: true },
    cargo: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    salario: { type: Number, min: 0 },
    telefone: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Funcionario', FuncionarioSchema);
