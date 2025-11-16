const express = require('express');
const router = express.Router();

const VendasModel = require('../models/VendasModels');
const { validarId } = require('../validators/IDValidator');
const { validarVenda, validarVendaAtualizacao } = require('../validators/VendasValidators');

router.get('/vendas', async (req, res) => {
  try {
    const vendas = await VendasModel.find().populate('pedido funcionario');
    res.json(vendas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar vendas.', error });
  }
});

router.get('/vendas/:id', validarId, async (req, res) => {
  try {
    const venda = await VendasModel.findById(req.params.id).populate('pedido funcionario');
    if (!venda) {
      return res.status(404).json({ message: 'Venda não encontrada!' });
    }
    res.json(venda);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar venda.', error });
  }
});

router.post('/vendas', validarVenda, async (req, res) => {
  try {
    const novaVenda = await VendasModel.create(req.body);
    res.status(201).json(novaVenda);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar venda.', error });
  }
});

router.put('/vendas/:id', validarId, validarVendaAtualizacao, async (req, res) => {
  try {
    const atualizada = await VendasModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizada) {
      return res.status(404).json({ message: 'Venda não encontrada!' });
    }
    res.json(atualizada);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar venda.', error });
  }
});

router.delete('/vendas/:id', validarId, async (req, res) => {
  try {
    const removida = await VendasModel.findByIdAndDelete(req.params.id);
    if (!removida) {
      return res.status(404).json({ message: 'Venda não encontrada!' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover venda.', error });
  }
});

module.exports = router;
