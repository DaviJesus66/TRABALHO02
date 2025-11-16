const express = require('express');
const router = express.Router();

const ItensPedidoModel = require('../models/ItensPedidoModels');
const { validarId } = require('../validators/IDValidator');
const { validarItensPedido, validarItensPedidoAtualizacao } = require('../validators/ItensPedidoValidators');

router.get('/itenspedido', async (req, res) => {
  try {
    const itens = await ItensPedidoModel.find().populate('pedido produto');
    res.json(itens);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar itens do pedido.', error });
  }
});

router.get('/itenspedido/:id', validarId, async (req, res) => {
  try {
    const item = await ItensPedidoModel.findById(req.params.id).populate('pedido produto');
    if (!item) {
      return res.status(404).json({ message: 'Item do pedido não encontrado!' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar item do pedido.', error });
  }
});

router.post('/itenspedido', validarItensPedido, async (req, res) => {
  try {
    const novoItem = await ItensPedidoModel.create(req.body);
    res.status(201).json(novoItem);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar item do pedido.', error });
  }
});

router.put('/itenspedido/:id', validarId, validarItensPedidoAtualizacao, async (req, res) => {
  try {
    const atualizado = await ItensPedidoModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!atualizado) {
      return res.status(404).json({ message: 'Item do pedido não encontrado!' });
    }
    res.json(atualizado);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar item do pedido.', error });
  }
});

router.delete('/itenspedido/:id', validarId, async (req, res) => {
  try {
    const removido = await ItensPedidoModel.findByIdAndDelete(req.params.id);
    if (!removido) {
      return res.status(404).json({ message: 'Item do pedido não encontrado!' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover item do pedido.', error });
  }
});

module.exports = router;
