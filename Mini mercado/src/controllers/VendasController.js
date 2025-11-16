const express = require('express');
const router = express.Router();

const VendasModel = require('../models/VendasModels');
const { validarId } = require('../validators/IDValidator');
const { validarVenda, validarVendaAtualizacao } = require('../validators/VendasValidators');

router.get('/vendas', async (req, res) => {
  const vendas = await VendasModel.find().populate('pedido funcionario');
  res.json(vendas);
});

router.get('/vendas/:id', validarId, async (req, res) => {
  const venda = await VendasModel.findById(req.params.id).populate('pedido funcionario');
  if (!venda) return res.status(404).json({ message: 'Venda não encontrada!' });
  res.json(venda);
});

router.post('/vendas', validarVenda, async (req, res) => {
  const novaVenda = await VendasModel.create(req.body);
  res.status(201).json(novaVenda);
});

router.put('/vendas/:id', validarId, validarVendaAtualizacao, async (req, res) => {
  const atualizada = await VendasModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!atualizada) return res.status(404).json({ message: 'Venda não encontrada!' });
  res.json(atualizada);
});

router.delete('/vendas/:id', validarId, async (req, res) => {
  const removida = await VendasModel.findByIdAndDelete(req.params.id);
  if (!removida) return res.status(404).json({ message: 'Venda não encontrada!' });
  res.status(204).send();
});

module.exports = router;
