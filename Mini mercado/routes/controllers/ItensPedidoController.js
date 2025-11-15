const express = require('express');
const router = express.Router();

const ItensPedidoModel = require('../models/ItensPedidoModels');
const { validarId } = require('../validators/IDValidator');
const { validarItensPedido, validarItensPedidoAtualizacao } = require('../validators/ItensPedidoValidators');

router.get('/itenspedido', async (req, res) => {
  const itens = await ItensPedidoModel.find().populate('pedido produto');
  res.json(itens);
});

router.get('/itenspedido/:id', validarId, async (req, res) => {
  const item = await ItensPedidoModel.findById(req.params.id).populate('pedido produto');
  if (!item) return res.status(404).json({ message: 'Item do pedido não encontrado!' });
  res.json(item);
});

router.post('/itenspedido', validarItensPedido, async (req, res) => {
  const novoItem = await ItensPedidoModel.create(req.body);
  res.status(201).json(novoItem);
});

router.put('/itenspedido/:id', validarId, validarItensPedidoAtualizacao, async (req, res) => {
  const atualizado = await ItensPedidoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!atualizado) return res.status(404).json({ message: 'Item do pedido não encontrado!' });
  res.json(atualizado);
});

router.delete('/itenspedido/:id', validarId, async (req, res) => {
  const removido = await ItensPedidoModel.findByIdAndDelete(req.params.id);
  if (!removido) return res.status(404).json({ message: 'Item do pedido não encontrado!' });
  res.status(204).send();
});

module.exports = router;
