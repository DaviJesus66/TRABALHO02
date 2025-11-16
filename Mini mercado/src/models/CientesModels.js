const mongoose = require('mongoose');


const ClientesModelsSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  cpf: { type: String, required: true, unique: true },
  telefone: { type: String },
  endereco: { tipo: String },
  createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Cliente', ClientesModelsSchemaSchema);