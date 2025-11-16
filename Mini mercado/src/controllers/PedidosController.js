const express = require('express');
const router = express.Router();

const PedidosModel = require('../models/PedidosModels');
const { validarId } = require('../validators/IDValidator');
const { validarPedidos, validarPedidosAtualizacao } = require('../validators/PedidosValidators');

router.get('/pedidos', async (req, res) => {
  try {
    const pedidos = await PedidosModel.find();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar Pedidos.', error });
  }
});

router.get('/pedidos/:id', validarId, async (req, res) => {
  try {
    const pedidos = await PedidosModel.findById(req.params.id);
    if (!pedidos) {
      return res.status(404).json({ message: 'Pedidos não encontrado!' });
    }
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pedidos.', error });
  }
});

router.post('/pedidos', validarPedidos, async (req, res) => {
  try {
    const novaPedidos = await PedidosModel.create(req.body);
    res.status(201).json(novaPedidos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pedidos.', error });
  }
});

router.put('/pedidos/:id', validarId, validarPedidosAtualizacao, async (req, res) => {
  try {
    const updatedPedidos = await PedidosModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedPedidos) {
      return res.status(404).json({ message: 'Pedidos não encontrado!' });
    }
    res.json(updatedPedidos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar pedidos.', error });
  }
});

router.delete('/pedidos/:id', validarId, async (req, res) => {
  try {
    const deletedPedidos = await PedidosModel.findByIdAndDelete(req.params.id);
    if (!deletedPedidos) {
      return res.status(404).json({ message: 'Pedidos não encontrado!' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar Pedidos.', error });
  }
});

module.exports = router;