const mongoose = require('mongoose');


const FuncionariosModelsSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  cargo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  salario: { type: Number, min: 0 },
  telefone: { type: String },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Funcionario', FuncionariosModelsSchema);