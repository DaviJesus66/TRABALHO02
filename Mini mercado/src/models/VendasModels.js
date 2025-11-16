const mongoose = require('mongoose');

const VendaSchema = new mongoose.Schema(
  {
    pedido: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
    funcionario: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true }
    // O campo data pode ser omitido pois o timestamps já adiciona createdAt e updatedAt automaticamente
  },
  { timestamps: true }
);

module.exports = mongoose.model('Venda', VendaSchema);
