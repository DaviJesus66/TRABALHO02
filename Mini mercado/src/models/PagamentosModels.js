const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  pedido: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
  valor: { type: Number, required: true, min: 0 },
  forma_pagamento: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Pagamento', schema);
