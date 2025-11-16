const express = require('express');
const router = express.Router();

const FornecedoresModel = require('../models/FornecedoresModels');
const { validarId } = require('../validators/IDValidator');
const { validarFornecedor, validarFornecedorAtualizacao } = require('../validators/FornecedoresValidators');

router.get('/Fornecedores', async (req, res) => {
  try {
    const fornecedores = await FornecedoresModel.find();
    res.json(fornecedores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar fornecedores.', error });
  }
});

router.get('/Fornecedores/:id', validarId, async (req, res) => {
  try {
    const fornecedor = await FornecedoresModel.findById(req.params.id);
    if (!fornecedor) {
      return res.status(404).json({ message: 'Fornecedor não encontrado!' });
    }
    res.json(fornecedor);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar fornecedor.', error });
  }
});

router.post('/Fornecedores', validarFornecedor, async (req, res) => {
  try {
    const novoFornecedor = await FornecedoresModel.create(req.body);
    res.status(201).json(novoFornecedor);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar fornecedor.', error });
  }
});

router.put('/Fornecedores/:id', validarId, validarFornecedorAtualizacao, async (req, res) => {
  try {
    const updatedFornecedor = await FornecedoresModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedFornecedor) {
      return res.status(404).json({ message: 'Fornecedor não encontrado!' });
    }
    res.json(updatedFornecedor);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar fornecedor.', error });
  }
});

router.delete('/Fornecedores/:id', validarId, async (req, res) => {
  try {
    const deletedFornecedor = await FornecedoresModel.findByIdAndDelete(req.params.id);
    if (!deletedFornecedor) {
      return res.status(404).json({ message: 'Fornecedor não encontrado!' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover fornecedor.', error });
  }
});

module.exports = router;
