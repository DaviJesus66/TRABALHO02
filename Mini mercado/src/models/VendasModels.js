const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  pedido: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
  funcionario: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true },
  data: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Venda', schema);
