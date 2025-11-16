const express = require('express');
const router = express.Router();

const PagamentosModel = require('../models/PagamentosModels');
const { validarId } = require('../validators/IDValidator');
const { validarPagamento, validarPagamentoAtualizacao } = require('../validators/PagamentoValidators');

router.get('/pagamentos', async (req, res) => {
  try {
    const pagamentos = await PagamentosModel.find().populate('pedido');
    res.json(pagamentos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pagamentos.', error });
  }
});

router.get('/pagamentos/:id', validarId, async (req, res) => {
  try {
    const pagamento = await PagamentosModel.findById(req.params.id).populate('pedido');
    if (!pagamento) {
      return res.status(404).json({ message: 'Pagamento não encontrado!' });
    }
    res.json(pagamento);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pagamento.', error });
  }
});

router.post('/pagamentos', validarPagamento, async (req, res) => {
  try {
    const novoPagamento = await PagamentosModel.create(req.body);
    res.status(201).json(novoPagamento);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pagamento.', error });
  }
});

router.put('/pagamentos/:id', validarId, validarPagamentoAtualizacao, async (req, res) => {
  try {
    const atualizado = await PagamentosModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado) {
      return res.status(404).json({ message: 'Pagamento não encontrado!' });
    }
    res.json(atualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar pagamento.', error });
  }
});

router.delete('/pagamentos/:id', validarId, async (req, res) => {
  try {
    const removido = await PagamentosModel.findByIdAndDelete(req.params.id);
    if (!removido) {
      return res.status(404).json({ message: 'Pagamento não encontrado!' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover pagamento.', error });
  }
});

module.exports = router;
