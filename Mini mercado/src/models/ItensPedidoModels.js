const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  pedido: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
  produto: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
  quantidade: { type: Number, required: true, min: 1 },
  preco_unitario: { type: Number, required: true, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('ItensPedido', schema);
