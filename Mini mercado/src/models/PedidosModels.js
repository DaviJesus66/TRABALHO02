const mongoose = require('mongoose');

// Schema para o item de pedido
const ItemPedidoSchema = new mongoose.Schema(
  {
    produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
    quantidade: { type: Number, required: true, min: 1 },
    precoUnitario: { type: Number, required: true, min: 0 }
  },
  { _id: false }
);

// Schema do pedido
const PedidoSchema = new mongoose.Schema(
  {
    cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    itens: [ItemPedidoSchema],
    total: { type: Number, required: true, min: 0 },
    status: { type: String, enum: ['pendente', 'pago', 'cancelado'], default: 'pendente' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Pedido', PedidoSchema);
