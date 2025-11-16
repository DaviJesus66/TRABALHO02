const express = require('express');
const router = express.Router();

const ClientesModel = require('../models/ClientesModels');
const { validarId } = require('../validators/IDValidator');
const { validarClientes, validarClientesAtualizacao } = require('../validators/ClientesValidators');

router.get('/clientes', async (req, res) => {
  try {
    const clientes = await ClientesModel.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar clientes.', error });
  }
});

router.get('/clientes/:id', validarId, async (req, res) => {
  try {
    const clientes = await ClientesModel.findById(req.params.id);
    if (!clientes) {
      return res.status(404).json({ message: 'Clientes não encontrada!' });
    }
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar clientes.', error });
  }
});

router.post('/clientes', validarClientes, async (req, res) => {
  try {
    const novaClientes = await ClientesModel.create(req.body);
    res.status(201).json(novaClientes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar clientes.', error });
  }
});

router.put('/clientes/:id', validarId, validarClientesAtualizacao, async (req, res) => {
  try {
    const updatedClientes = await ClientesModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedClientes) {
      return res.status(404).json({ message: 'Clientes não encontrada!' });
    }
    res.json(updatedClientes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar clientes.', error });
  }
});

router.delete('/clientes/:id', validarId, async (req, res) => {
  try {
    const deletedClientes = await ClientesModel.findByIdAndDelete(req.params.id);
    if (!deletedClientes) {
      return res.status(404).json({ message: 'Clientes não encontrads!' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar clientes.', error });
  }
});

module.exports = router;