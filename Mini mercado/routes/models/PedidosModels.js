const mongoose = require('mongoose');


const ItemPedidoSchema = new mongoose.Schema({
produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
quantidade: { type: Number, required: true, min: 1 },
precoUnitario: { type: Number, required: true, min: 0 },
});


const PedidosModelsSchema = new mongoose.Schema({
cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
itens: [ItemPedidoSchema],
total: { type: Number, required: true, min: 0 },
status: { type: String, enum: ['pendente','pago','cancelado'], default: 'pendente' },
criadoEm: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Pedido', PedidosModelsSchema);