const express = require('express');
const router = express.Router();

const PagamentosModel = require('../models/PagamentosModels');
const { validarId } = require('../validators/IDValidator');
const { validarPagamento, validarPagamentoAtualizacao } = require('../validators/PagamentoValidators');

router.get('/pagamentos', async (req, res) => {
  const pagamentos = await PagamentosModel.find().populate('pedido');
  res.json(pagamentos);
});

router.get('/pagamentos/:id', validarId, async (req, res) => {
  const pagamento = await PagamentosModel.findById(req.params.id).populate('pedido');
  if (!pagamento) return res.status(404).json({ message: 'Pagamento não encontrado!' });
  res.json(pagamento);
});

router.post('/pagamentos', validarPagamento, async (req, res) => {
  const novoPagamento = await PagamentosModel.create(req.body);
  res.status(201).json(novoPagamento);
});

router.put('/pagamentos/:id', validarId, validarPagamentoAtualizacao, async (req, res) => {
  const atualizado = await PagamentosModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!atualizado) return res.status(404).json({ message: 'Pagamento não encontrado!' });
  res.json(atualizado);
});

router.delete('/pagamentos/:id', validarId, async (req, res) => {
  const removido = await PagamentosModel.findByIdAndDelete(req.params.id);
  if (!removido) return res.status(404).json({ message: 'Pagamento não encontrado!' });
  res.status(204).send();
});

module.exports = router;
