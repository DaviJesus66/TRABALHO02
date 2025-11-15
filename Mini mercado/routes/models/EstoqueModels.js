const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  produto: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
  quantidade: { type: Number, required: true, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Estoque', schema);
